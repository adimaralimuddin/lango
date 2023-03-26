import Image from "next/image";
import React from "react";
import MainHeader from "./MainHeader";

const MainHero = () => {
  return (
    <div
      //   style={{ backgroundImage: "url('/images/bg.jpg')" }}
      className="flex flex-col h-[95vh] bg-cover "
    >
      <MainHeader />
      <div className="flex relative flex-col flex-1 bg-gradient-to-b from-primary-light to-green-50 max-h-[80%]d ">
        <div className="z-20 flex flex-col flex-1 justify-center container gap-8 items-start max-w-5xl mx-auto p-3 max-h-[80%] ">
          <h1 className="text-[3.5rem] font-bold leading-[1] max-w-2xl text-white">
            The Fun and Easy way to Learn Any Language!
          </h1>
          <a href="#languages">
            <button className="p-3 px-12 rounded-2xl font-bold text-2xl bg-white text-primary-light">
              Start Learning
            </button>
          </a>
          <div className="flex gap-3">
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
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="-z-20 opacity-100">
            {/* <div className="z-[1] w-[25%] opacity-90 p-7 h-[300px] bg-white rounded-[100%] absolute left-0 bottom-[0rem]"></div> */}
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
      </div>
    </div>
  );
};

export default MainHero;
