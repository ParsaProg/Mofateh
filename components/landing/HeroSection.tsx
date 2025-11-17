"use client";

import LottieAnimationHero from "@/public/lotties/Exams Preparation..json";
import LibraryAnimation from "@/public/lotties/Book Animation.json";
import { motion } from "framer-motion";
import { UserStar } from "lucide-react";
import Lottie from "lottie-react";
import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { HeroGridData } from "@/src/data/hero-grid-data";
import { socialMediaLinks } from "@/src/data/social-media-links";

export default function HeroSection() {
  return (
    <div className="[@media(max-width:1496px)]:mt-[130px] [@media(max-width:1190px)]:flex-col relative w-full shrink-0 flex items-center justify-center gap-x-5">
      <section className="[@media(max-width:1190px)]:w-full shrink-0 flex flex-col items-start [@media(max-width:1190px)]:items-center [@media(max-width:1190px)]:text-center gap-y-5 z-100 overflow-hidden">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.5 }}
          className="text-black md:text-5xl md:p-0 px-2 text-4xl md:w-[400px] font-bold leading-14"
        >
          دبیرستان نمونه دولتی شهید مفتح
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7 }}
          className="[@media(min-width:400px)]:w-[400px] [@media(max-width:400px)]:px-2 w-full [@media(max-width:1190px)]:text-center text-justify text-lg text-slate-600 font-thin"
        >
          مدرسهٔ نمونه دولتی شهید مفتح محیطی منظم و فعال برای پیشرفت تحصیلی
          دانش‌آموزان است. با داشتن معلمان مجرب و برنامه‌ریزی دقیق، این مدرسه
          تلاش می‌کند زمینهٔ رشد علمی و اخلاقی دانش‌آموزان را فراهم کند. شرکت در
          فعالیت‌های علمی و فرهنگی نیز از ویژگی‌های برجسته این مدرسه است.
        </motion.p>
        <div className="w-full flex items-center justify-center [@media(max-width:565px)]:flex-col gap-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              whileTap={{ scale: 0.91 }}
              className="flex items-center justify-center gap-x-1 cursor-pointer rounded-full w-[280px] [@media(min-width:565px)]:px-5 py-3 text-white bg-blue-600 text-md font-bold"
            >
              <div className="w-10 h-10 overflow-hidden">
                <Lottie
                  animationData={LibraryAnimation}
                  loop={true}
                  className="w-10 h-10"
                  width={800}
                  height={800}
                />
              </div>
              عضویت در کتابخانه دیجیتال
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay: 1.1 }}
          >
            <motion.div whileTap={{ scale: 0.91 }} className="rounded-4xl">
              <button className=" bg-[#ffffff20] backdrop-blur-md flex items-center justify-center cursor-pointer rounded-full w-[280px] [@media(min-width:565px)]:px-5 py-4 text-center text-blue-600 font-bold transition-all duration-200 hover:bg-blue-600 hover:text-white border border-blue-600 text-lg gap-x-2 z-100">
                <UserStar size={20} />
                مشاهده لیست دبیران
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-5 [@media(max-width:572px)]:w-full w-[572px] mt-3">
          {socialMediaLinks.map((val, _i) => {
            return (
              <motion.div key={_i} whileTap={{ scale: 0.91 }}>
                <motion.a
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: _i * 0.2 }}
                  className="w-full z-200 p-3 rounded-full border bg-[#ffffffd5] backdrop-blur-lg border-slate-300 text-black font-bold flex items-center justify-center gap-x-2 text-lg"
                  href={val.link}
                >
                  {val.icon}
                  {val.text}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.5, x: -50 },
          visible: { scale: 1, opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="-z-1 [@media(min-width:1190px)]:-mr-20 relative rounded-full flex items-center justify-center "
      >
        <motion.div
          transition={{ delay: 0.9, duration: 0.9 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 0.3, scale: 1 },
          }}
          className="absolute -z-1 top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] bg-blue-600 opacity-[0.5] blur-[100px] w-full h-[35vw] rounded-full"
        >
          <style>{`
    @supports not (backdrop-filter: blur(10px)) {
      .fallback-blur {
        box-shadow: 0 0 100px 50px rgba(59, 130, 246, 0.5);
      }
    }
  `}</style>
        </motion.div>
        <Lottie
          animationData={LottieAnimationHero}
          loop={true}
          width={1000}
          height={1000}
          className="[@media(min-width:1496px)]:w-[38vw] [@media(max-width:1190px)]:w-[80vw] w-[30vw]"
        />
      </motion.section>
      <section className="flex flex-col [@media(max-width:1190px)]:m-0 items-start gap-y-8 -mr-20 z-100">
        <div className="grid grid-cols-2 gap-5">
          {HeroGridData.map((val, _i) => {
            return (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: _i * 0.3 }}
                key={_i}
                className="flex flex-col items-center rounded-xl p-5 w-full bg-[#3e3d3d13] backdrop-blur-md"
              >
                <h1 dir="ltr" className="text-black font-bold text-2xl">
                  {convertToFarsiNumbers(val.title)}
                </h1>
                <h2 className="text-slate-700 text-sm w-[130px] text-center font-bold">
                  {val.subTitle}
                </h2>
              </motion.div>
            );
          })}
        </div>
      </section>{" "}
    </div>
  );
}
