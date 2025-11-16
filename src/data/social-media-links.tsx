import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export const socialMediaLinks = [
  {
    icon: <Mail size={20} />,
    link: "mailto:parsashaabani3@gmail.com",
    text: "ایمیل مدرسه",
  },
  {
    icon: (
      <div className="w-5 h-5 overflow-hidden">
        <Image
          draggable={false}
          alt="ایتای مدرسه نمونه دولتی مفتح"
          src="https://www.hooshefaal.ir/wp-content/uploads/2025/07/Eitaa-Logo2-LimooGraphic.png"
          width={100}
          height={100}
          className="w-12"
          unoptimized
        />
      </div>
    ),
    link: "mailto:parsashaabani3@gmail.com",
    text: "ایتای مدرسه",
  },
  {
    icon: (
      <div className="w-5 h-5 overflow-hidden">
        <Image
          draggable={false}
          alt="سروش مدرسه نمونه دولتی مفتح"
          src="https://web.splus.ir/icon-192x192.png"
          width={100}
          height={100}
          className="w-12"
          unoptimized
        />
      </div>
    ),
    link: "mailto:parsashaabani3@gmail.com",
    text: "سروش مدرسه",
  },
  {
    icon: <Phone size={18} />,
    link: "call:+989915980854",
    text: "تماس با مدرسه",
  },
];
