import { headerList } from "@/src/data/headerList";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <motion.div
      transition={{ delay: 0.5 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      className="relative"
    >
      <motion.div
        onClick={() => setShowMenu(!showMenu)}
        whileTap={{ scale: 0.91 }}
        className="cursor-pointer rounded-xl border border-slate-400 p-3 text-black"
      >
        <Menu size={20} />
      </motion.div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: -80 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            key="menu"
            className="w-[220px] overflow-hidden left-0 flex flex-col items-start gap-y-2 bg-white z-9999999 absolute top-15 shadow-[0px_0px_10px_5px] shadow-[#002aff43] rounded-xl p-3 text-black"
          >
            {headerList.map((val, _i) => {
              return (
                <div
                  key={_i}
                  className="flex items-center gap-x-2 text-md p-3 transition-all duration-200 hover:bg-blue-600 bg-white hover:text-white w-full rounded-lg"
                >
                  {val.icon}
                  {val.title}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
