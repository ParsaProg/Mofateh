import {
  BadgeInfoIcon,
  LibrarySquareIcon,
  LogIn,
  ShieldCheck,
  UserCheck,
  Users2,
  UserStar,
} from "lucide-react";

export const headerList = [
  {
    icon: <BadgeInfoIcon size={20} />,
    title: "معرفی مدرسه",
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
    icon: <LibrarySquareIcon size={20} />,
    title: "شرح کتابخانه",
    scroller: null,
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "کادر اجرایی",
    scroller: null,
  },
];
