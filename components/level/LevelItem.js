import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useLesson from "../../hooks/useLesson";
import Box from "../elements/Box";
import Indexer from "../elements/Indexer";
import LessonItem from "../lesson/LessonItem";
import { default as useMain, default as useStore } from "../main/MainStore";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export default function LevelItem({ data }) {
  const { listenlessons, clearLessons } = useLesson();
  const { set, level } = useMain();
  const { setTab } = useStore();
  const [lessons, setLessons] = useState([]);

  // console.log("data ", data);

  useEffect(() => {
    const ret = listenlessons(data?.id, setLessons);
    return ret;
  }, [data?.id]);

  const onClickHandler = () => {
    setTab("lessons", "level", data?.id);
  };

  const runy = () => {
    let alt = true;
    let count = 1;

    let ret = lessons?.map((l) => {
      return l;
    });

    return ret;
  };

  const sortedLessons = lessons?.sort((a, b) => a?.num - b?.num);

  return (
    <div className="ring-1d">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#5D2B84] dark:bg-[#6a59ad] flex gap-6 text-white p-6 rounded-3xl "
        onClick={onClickHandler}
      >
        <Image src="/images/castle.png" width={40} height={30} alt="" />
        <div>
          <h1 className="font-bold text-lg ">{data?.level}</h1>
          <h2 className="text-xl ">{data?.name}</h2>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-6 p-6">
        <motion.div className="grid grid-cols-6 gap-3 ring-1d">
          {sortedLessons?.map((lang, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: i * 0.3 } }}
              className={
                "p-2  bg-green-400d mx-auto " +
                (i === 0 || i.toString().includes(8)
                  ? " col-span-6 "
                  : i.toString().includes(1) ||
                    i.toString().includes(2) ||
                    i.toString().includes(6) ||
                    i.toString().includes(7)
                  ? " col-span-3"
                  : i.toString().includes(3) ||
                    i.toString().includes(4) ||
                    i.toString().includes(5)
                  ? " col-span-2 w-mind place-self-centerd " + ""
                  : "")
              }
              key={i}
            >
              <LessonItem data={lang} ind={i} key={lang?.id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// {/* <div>
//           <LessonItem data={lessons?.[0]} />
//         </div>
//         <div className="flex gap-12">
//           <LessonItem data={lessons?.[1]} />
//           <LessonItem data={lessons?.[2]} />
//         </div>
//         <div className="flex gap-12">
//           <LessonItem data={lessons?.[3]} />
//           <LessonItem data={lessons?.[2]} />
//           <LessonItem data={lessons?.[1]} />
//         </div>
//         <div className="flex gap-12">
//           <LessonItem data={lessons?.[1]} />
//           <LessonItem data={lessons?.[2]} />
//         </div> */}
