import { HERO_CONTENT } from "../constants";
import photo from "../assets/Keshav_mic.jpg";
import { motion } from "framer-motion"

const container = (delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
}); 

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-5">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
             variants = {container(0)}
             initial = "hidden"
             animate = "visible"

             className="pb-6 text-6xl font-thin tracking-tight lg:mt-5 lg:text-8xl">Keshav Vijay</motion.h1>
            
            <motion.span  
             variants = {container(0.5)}
             initial = "hidden"
             animate = "visible"
   className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full stack Developer</motion.span>
            <motion.p  variants = {container(1)}
             initial = "hidden"
             animate = "visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2 flex justify-center">
          <motion.img
          initial = {{x:100,opacity:0}}
          animate = {{x:0,opacity:1}}
          transition = {{duration:1,delay:1.2}}
            src={photo}
            alt="Keshav Vijay"
            className="max-w-full lg:max-w-lg h-auto lg:h-96 rounded-lg border-4 border-neutral-900 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
