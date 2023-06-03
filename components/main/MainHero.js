import Image from "next/image";
import React from "react";
import MainHeader from "./MainHeader";

const MainHero = () => {
  return (
    <div
      //   style={{ backgroundImage: "url('/images/bg.jpg')" }}
      className="flex flex-col h-[100vh] bg-cover bg-[#4a5a85]d bg-back-main "
    >
      <MainHeader showTheme={false} />
      <div className="flex flex-1 max-w-5xl mx-auto w-full flex-wrap ">
        <Texts />
        <BackEarth />
      </div>
      <BottomLanguages />
    </div>
  );
};

function Texts() {
  return (
    <div className="z-20 flex flex-col flex-1 justify-center container gap-8 max-w-5xl mx-auto p-3  ">
      <div className="text-white text-5xl font-semibold">
        <h1 className="text-[2.5rem]">
          With <Bold>LANGO,</Bold>
        </h1>
        <h2>Learning a Language</h2>
        <h1 className="text-[3rem] ">
          is <Bold>FUN</Bold> & <Bold>EASY!</Bold>
        </h1>
      </div>
      <a href="#languages">
        <button className="p-3 px-12 rounded-2xl font-extrabold text-2xl text-white bg-primary-light">
          Let{"'"}s Learn!
        </button>
      </a>
      <p className="text-white flex items-center gap-3 animate-bounce text-xl">
        Scroll Down <span className="text-4xl">↓</span>
      </p>
    </div>
  );
}

function Bold({ children }) {
  return <span className="font-extrabold text-[3.5rem]">{children}</span>;
}

function BackEarth() {
  return (
    <div className="bg-[#6d6ca8]d p-12 flex-1 flex items-center justify-center">
      <div className="bg-green-400d  w-full  max-h-[%80] max-w-[360px] relative aspect-square ">
        <div className="absolute top-0 left-0 h-full  w-full rounded-full aspect-square overflow-hidden ring-[5px] ring-[#eac6f5] ">
          <Image
            className="absolute top-0 left-0 h-full  w-full scale-[1.1] rounded-fulld"
            src={"/images/globe.gif"}
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="bg-white absolute p-7 top-12 rounded-full w-[30%] "></div>

        <Hello reverse={true} img="woman1" right="0" top="10%">
          你好
        </Hello>
        <Hello img="boy1" bottom={"5%"} left={"-10%"}>
          مرحبا
        </Hello>
      </div>
    </div>
  );
}

function Hello({ img, reverse, children, top, left, right, bottom }) {
  return (
    <div
      style={{
        top,
        left,
        right,
        bottom,
        flexDirection: reverse ? "row-reverse" : "row",
      }}
      className=" hover:scale-[1.2] items-start absolute  animate-pulsed flex"
    >
      <h1 className="bg-primary-light text-4xl font-bold text-white p-3 rounded-xl ">
        {children}{" "}
      </h1>
      {/* <span className="relative"> */}

      <Image
        className="absoluted mt-10 top-0 left-0 rounded-full aspect-square "
        src={`/images/${img}.gif`}
        width={100}
        height={100}
        alt=""
      />
      {/* </span> */}
    </div>
  );
}

function BottomLanguages() {
  return (
    <div className="flex gap-8 justify-center items-center p-5 bg-[#4A298F] overflow-auto">
      <span className="flex gap-3">
        <Image src="/flags/kr.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Korean</p>
      </span>
      <span className="flex gap-3">
        <Image src="/flags/jp.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Japanese</p>
      </span>
      <span className="flex gap-3">
        <Image src="/flags/cn.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Chinese</p>
      </span>
      <span className="flex gap-3">
        <Image src="/flags/kr.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Korean</p>
      </span>
      <span className="flex gap-3">
        <Image src="/flags/jp.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Japanese</p>
      </span>
      <span className="flex gap-3">
        <Image src="/flags/cn.png" width={30} height={30} alt="korean" />
        <p className="text-xl text-white font-medium">Chinese</p>
      </span>
    </div>
  );
}

function Back2() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="-z-20 opacity-100">
        <div className="z-[1] w-[25%] opacity-90 p-7 h-[300px] bg-white rounded-[100%] absolute left-0 bottom-[0rem]"></div>
        <div className="w-[25%] opacity-50 p-7 bg-white rounded-full absolute right-12 bottom-[20rem]"></div>
        <div className="w-[12%] opacity-70 p-5 bg-white rounded-full absolute right-[20%] bottom-[16rem]"></div>
      </div>
      <div className="z-10 flex gap-6 items-end container mx-auto max-w-5xl opacity-70">
        <Image
          className="z-20"
          src="/landmarks/paifang.png"
          width={70}
          height={70}
        />
        <Image
          src="/landmarks/leaning-tower-of-pisa.png"
          width={100}
          height={200}
        />
        <Image
          src="/landmarks/cathedral-of-saint-basil.png"
          width={120}
          height={200}
        />
        <Image src="/landmarks/taj-mahal.png" width={130} height={200} />
        <Image src="/landmarks/paifang.png" width={100} height={70} />
        <Image
          src="/landmarks/leaning-tower-of-pisa.png"
          width={160}
          height={200}
        />
      </div>
    </div>
  );
}

export default MainHero;
