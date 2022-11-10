import React, { useEffect, useRef } from "react";
import { img } from "../assets/img";
import { motion, useAnimationControls, useInView  } from "framer-motion";
import { FormattedMessage } from "react-intl";

function Skills() {

  const ref = useRef(null)
  const isInView = useInView(ref , { once: true })

  // Controlamos el tiempo que demora cada icono en iniciar animcaion
  const controlIcons = useAnimationControls();

  useEffect(() => {
    controlIcons.start((i) => ({
      y: [-200, 0],
      scale: [0, 1],
      rotateX: 360,
      borderRadius: ["10%", "100%"],
      transition: {
        duration: 2,
        delay: i * 0.6,
      },
    }));
  },[isInView]);

  return (
    <section className="relative w-full h-screen bg-[#0D070F] grid grid-cols-3" >
      <div className="grid grid-rows-6 gap-4 2xl:gap-10 pr-1 2xl:pr-8" ref={ ref }>
        <motion.div
          className="justify-self-end flex flex-row items-center"
          custom={2}
          animate={isInView ? controlIcons : undefined }
        >
          <img
            className="rounded-full w-24 h-24 bg-slate-200 z-10 p-1"
            src={img.react}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","177px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">85%</span>
        </motion.div>
        <motion.div
          className="justify-self-center flex flex-row items-center"
          custom={2}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.redux}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={ isInView ? {width: ["10px","125px"]} : undefined }
              transition={ isInView ? { duration: 4, delay: 3 } : undefined}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">60%</span>
        </motion.div>
        <motion.div
          className="flex flex-row items-center ml-0 2xl:ml-14"
          custom={2}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.html}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","166px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">80%</span>
        </motion.div>
        <motion.div
          className="flex flex-row items-center xl:ml-0 ml-0 2xl:ml-14"
          custom={2}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.jest}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","83px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">40%</span>
        </motion.div>
        <motion.div
          className="justify-self-center flex flex-row items-center"
          custom={2}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1 "
            src={img.git}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","146px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">70%</span>
        </motion.div>
        <motion.div
          className="flex flex-row justify-self-end items-center"
          custom={2}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.webpack}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white ml-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute left-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","83px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono ml-5">40%</span>
        </motion.div>
      </div>

      {/*
        imagen centras
        */}
      <div className="grid grid-rows-6 w-full h-full bg-transparent justify-center place-items-center" >
        <h2 className="text-white font-mono font-semibold text-2xl 2xl:text-4xl p-3">
          <FormattedMessage id="skills.title" />
        </h2>
        <img
          className="row-span-5 w-[28rem] h-[28rem] 2xl:w-[40rem] 2xl:h-[40rem] self-start rounded-full mt-14"
          src={img.coding}
          alt="Coding img"
        />
      </div>

      {/*
        iconos derecha
        */}

      <div className="grid grid-rows-6 gap-4 2xl:gap-10 pr-1 2xl:pr-8">
        <motion.div
          className="justify-self-start flex flex-row-reverse items-center"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.nodejs}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","125px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">60%</span>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse items-center justify-self-center"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.express}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","166px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">80%</span>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse items-center justify-self-end 2xl:mr-14"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.js}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","177px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">85%</span>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse items-center justify-self-end 2xl:mr-14"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.css}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","166px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">80%</span>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse items-center justify-self-center"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.tailwind}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","187px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">90%</span>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse items-center justify-self-start"
          custom={4}
          animate={isInView ? controlIcons : undefined}
        >
          <motion.img
            className="rounded-full w-24 h-24 bg-slate-200 p-1"
            src={img.bootstrap}
            alt=""
          />
          <div className="relative h-7 w-52 rounded-xl ring-1 ring-cyan-400 bg-white mr-5 z-10">
            <div className="absolute h-7 w-52 rounded-xl bg-cyan-400 blur-md z-0"></div>
            <motion.div
              className="absolute right-0 h-7 w-0 bg-cyan-500 rounded-xl"
              animate={isInView ? {width: ["5px","156px"]} : undefined}
              transition={{ duration: 4, delay: 3 }}
            />
          </div>
          <span className="text-white text-3xl font-mono mr-5">75%</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
