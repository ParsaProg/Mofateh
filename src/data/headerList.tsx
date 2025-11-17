import {
  BadgeInfoIcon,
  Code2,
  Image,
  LogIn,
  UserCheck,
  UserStar,
} from "lucide-react";

export const headerList = [
  {
    icon: <BadgeInfoIcon size={20} />,
    title: "معرفی مدرسه",
    scroller: null,
  },
  {
    icon: <Image size={20} />,
    title: "گالری تصاویر",
    scroller: null,
  },
  {
    icon: <UserCheck size={20} />,
    title: "دانش‌آموزان برتر",
    scroller: null,
  },
  { icon: <UserStar size={20} />, title: "دبیران", scroller: null },
  { icon: <LogIn size={20} />, title: "شرایط ثبت‌نام", scroller: null },

  {
    icon: <Code2 size={20} />,
    title: "درباره‌ی برنامه‌نویس",
    scroller: null,
  },
];
