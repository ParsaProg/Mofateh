import { headerList } from "@/src/data/headerList";
import { motion } from "framer-motion";

export default function DesktopHeader({ showHeaderSectionRef }: any) {
  return (
    showHeaderSectionRef && (
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
    )
  );
}
