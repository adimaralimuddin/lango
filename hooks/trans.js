import { updateDb } from "./useDb";

const axios = require("axios");

export const translate = async ({ text, to = "latn", from }) => {
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      "to[0]": to,
      "api-version": "3.0",
      toScript: to == "en-us" ? from : "latn",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "1b76055025mshbbc04023687da0cp1f94f4jsn60b077dce51c",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [{ Text: text }],
  };

  const res = await axios.request(options);

  const trans = res?.data[0]?.translations[0]?.text;
  const latin = res.data[0]?.translations[0]?.transliteration?.text || "";
  return { trans, latin };
};

export const voices = [
  { code: "en-us", voices: ["mary", "mike"] },
  { code: "zh-cn", voices: ["shu", "lee"] },
  { code: "hi-in", voices: ["puja", "kabir"] },
];

export const languages = [
  {
    code: "zh-cn",
    voices: [
      {
        val: "cmn-CN-Wavenet-A",
        align: "c",
        name: "minma",
        hd: true,
      },
      {
        val2: "cmn-CN-Standard-D",
        val: "cmn-CN-Wavenet-A",
        align: "l",
        name: "Zhi Ruo",
        hd: true,
      },
      {
        val: "cmn-CN-Wavenet-C",
        align: "r",
        name: "Meifen",
        hd: true,
      },
      {
        val: "shu",
        name: "linda",
        align: "c",
      },
      {
        val: "shu",
        name: "shu",
        align: "l",
      },
      {
        val: "lee",
        name: "lee",
        align: "r",
      },
    ],
  },
  {
    code: "es-es",
    voices: [
      {
        val: "es-ES-Wavenet-C",
        align: "c",
        name: "Gaspara",
        hd: true,
      },
      {
        val: "es-ES-Wavenet-C",
        align: "l",
        name: "Gaspara",
        hd: true,
      },
      {
        val: "es-ES-Wavenet-B",
        align: "r",
        name: "Horacio",
        hd: true,
      },
    ],
  },
  {
    code: "fr-fr",
    voices: [
      {
        val: "fr-CA-Wavenet-A",
        align: "c",
        name: "Brigitte",
        hd: true,
      },
      {
        val: "fr-CA-Wavenet-A",
        align: "l",
        name: "Brigitte",
        hd: true,
      },
      {
        val: "fr-CA-Wavenet-B",
        align: "r",
        name: "Victor",
        hd: true,
      },
    ],
  },
  {
    code: "ja-jp",
    voices: [
      {
        val: "ja-JP-Wavenet-B",
        align: "c",
        name: "Airi",
        hd: true,
      },
      {
        val: "ja-JP-Wavenet-B",
        align: "l",
        name: "Hina",
        hd: true,
      },
      {
        val: "ja-JP-Wavenet-D",
        align: "r",
        name: "Aito",
        hd: true,
      },
    ],
  },
  {
    code: "hi-in",
    voices: [
      {
        val: "hi-IN-Wavenet-D",
        align: "c",
        name: "Jyothi",
        hd: true,
      },
      {
        val: "hi-IN-Wavenet-A",
        align: "r",
        name: "Deepa",
        hd: true,
      },
      {
        val: "hi-IN-Wavenet-D",
        align: "l",
        name: "Jyothi",
        hd: true,
      },
      {
        val: "hi-IN-Wavenet-B",
        align: "r",
        name: "Ishaan",
        hd: true,
      },
    ],
  },
];

export const getVoice = (code) => voices?.find((v) => v?.code == code);
export const getLang = (code) => languages?.find((l) => l?.code == code);

export const getAvatar = (data, code) => {
  return `/avatars/${code}/${data?.voice?.val}.png`;
};

export async function transText(data, code, prev) {
  if (!data) {
    console.log("no data to check and translate");
    return;
  }
  const col_ = () => (prev?.type ? "items" : "lines");

  if (data?.text != prev?.text) {
    const { trans, latin } = await translate({ text: data?.text, to: code });
    data.trans = trans;
    data.latin = latin;
    updateDb(col_(), prev.id, { trans, latin });
    const aud = await speak(data, code, prev);
    if (aud) {
      updateDb(col_(), prev?.id, { aud });
    }
  } else {
    console.log("update audio only");
    // if (data?.voice != prev?.voice) {
    const aud = await speak(data, code, prev);
    if (aud) {
      updateDb(col_(), prev?.id, { aud });
    }
    // }
  }
}

// export const speak = async (
//   src = "人生で最高の作品を使うのはこれが初めてです",
//   lang = "ja-jp",
//   align = "center"
// ) => {
//   const key = "792e07fbe4964ac48f29290f6f694baa";
//   const voice = voices?.find(({ code }) => code == lang);
//   let v = voice?.voices?.[0];
//   if (align == "right") {
//     v = voice?.voices?.[1];
//   }
//   console.log(align, ", " + v);

//   const url = `http://api.voicerss.org/?src=${src}&hl=${lang}&r=-5&c=mp3&f=48khz_8bit_stereo&key=${key}&b64=true&v=${v}`;

//   const x = await axios.get(url);
//   return x.data;
// };

export const speak = async (data, code, prev) => {
  if (data?.voice?.hd) {
    return await synHd(data?.trans, data?.voice?.val, prev);
  } else {
    return await syn(data?.trans, data?.voice?.val, code, prev);
  }
};

export const syn = async (
  text = "人生で最高の作品を使うのはこれが初めてです",
  voice = "center",
  code = "ja-jp"
) => {
  const key = "792e07fbe4964ac48f29290f6f694baa";

  const url = `http://api.voicerss.org/?src=${text}&hl=${code}&r=-2&c=mp3&f=48khz_8bit_stereo&key=${key}&b64=true&v=${voice}`;

  const x = await axios.get(url);
  return x.data;
};

export const synHd = async (text, voice, prev) => {
  console.log("trans hd");
  const options = {
    method: "POST",
    url: "https://play.ht/api/v1/convert",
    headers: {
      "Content-Type": "application/json",
      Authorization: "da24867ac53b4efaa585cc21ad3a186f",
      "X-User-ID": "a8BJBmVnW2eOCbkrnabWYZmDmka2",
    },
    data: JSON.stringify({
      voice,
      ssml: [text],
      title: "test",
    }),
  };

  const res = await axios.request(options);

  setTimeout(() => {
    getSyn(res?.data?.transcriptionId, prev);
  }, 1000);
  return null;
};

async function getSyn(transcriptionId, prev) {
  const x = await axios.request({
    method: "GET",
    url:
      "https://play.ht/api/v1/articleStatus?transcriptionId=" + transcriptionId,
    headers: {
      "Content-Type": "application/json",
      Authorization: "09795674016241f98aa84da9c4232d2e",
      "X-User-ID": "utA1e5vSEHYxmSzwtW3hrQ1fQYp2",
    },
  });

  if (x?.data?.converted) {
    const col_ = () => (prev?.type ? "items" : "lines");
    const base64Audio = await getBase64FromUrl(x.data?.audioUrl);
    // console.log("b64", base64Audio);
    updateDb(col_(), prev?.id, { aud: base64Audio });
  } else {
    return undefined;
  }
}

export async function getBase64FromUrl(url) {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
}
