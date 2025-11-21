import Image from "next/image";
import LandingSectionTitle from "../ui/landingSectionTitle";

export function SchoolWorkers() {
  return (
    <div className="w-full">
      <LandingSectionTitle title="کادر مدرسه" />
      <div className="mt-5 grid grid-cols-5 isolate">
        <div className="group cursor-pointer overflow-hidden relative rounded-xl w-[220px] h-[200px]">
          <Image
            unoptimized
            src={
              "https://static.digiato.com/digiato/2022/07/Mr.-Qasemii-1.jpg.webp"
            }
            alt="علی پورشرافتان | دبیر ریاضی"
            width={800}
            height={800}
            className="w-[220px] h-[200px]"
          />
          <div className="">
            <div
              className="group-hover:opacity-0 transition-opacity duration-200 absolute top-0 right-0 inset-0 bg-[#0e1b35] w-[220px] h-[200px]"
              style={{
                mixBlendMode: "color",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
