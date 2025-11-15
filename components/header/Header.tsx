"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MainLogo from "@/public/images/logo-main.jpg";
import { LibraryBigIcon } from "lucide-react";
import { headerList } from "@/src/data/headerList";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeaderSectionRef, setShowHeaderSectionRef] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeaderSectionRef(true);
    }, 600);
  }, [showHeaderSectionRef]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scaleX: 0.9, width: "0" },
        visible: { opacity: 1, scaleX: 1, width: "85%" },
      }}
      transition={{ duration: 0.3 }}
      className="border-blue-200 border right-[50%] translate-x-[50%] fixed top-10 z-999999 rounded-2xl overflow-hidden transition-all duration-200 h-20 bg-white shadow-[0px_0px_10px_5px] shadow-[#0037ff1e] flex items-center justify-between p-5"
    >
      <div className="flex items-center gap-x-5">
        <motion.div
          transition={{ delay: 0.5 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            alt="نمونه دولتی شهید مفتح"
            src={MainLogo.src}
            width={800}
            height={800}
            className="w-[90px]"
          />
        </motion.div>
        {showHeaderSectionRef && (
          <motion.section
            className="flex items-center gap-x-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { display: "none", opacity: 0 },
              visible: { display: "flex", opacity: 1 },
            }}
          >
            {headerList.map((val, _i) => {
              return (
                <motion.div
                  initial="hidden"
                  transition={{ delay: _i * 0.09 }}
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0.3, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  key={_i}
                >
                  <motion.div
                    whileTap={{ scale: 0.91 }}
                    className="cursor-pointer p-3 rounded-xl transition-colors duration-200 hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-md flex items-center gap-x-2"
                  >
                    {val.icon}
                    {val.title}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.section>
        )}
      </div>
      <motion.div
        transition={{ delay: 0.5 }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <motion.div
          whileTap={{ scale: 0.91 }}
          className="cursor-pointer justify-center group rounded-xl bg-blue-600 text-white p-3 flex overflow-hidden items-center gap-x-2 relative"
        >
          <div className="absolute inset-0 bg-blue-950 w-0 h-[30px] rounded-full group-hover:w-full group-hover:h-[50px] transition-all duration-300 group-hover:rounded-none top-[50%] translate-x-[50%] translate-y-[-50%] right-[50%] z-1"></div>
          <LibraryBigIcon className="z-2" size={20} />
          <h1 className="z-2"> ورود | عضویت در کتابخانه دیجیتال</h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
