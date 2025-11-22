import Image from "next/image";
import LandingSectionTitle from "../ui/landingSectionTitle";
import { SchoolWorkersData } from "@/src/data/school-workers";

export function SchoolWorkers() {
  return (
    <div className="mt-10 w-full">
      <LandingSectionTitle title="کادر مدرسه" />
      <div className="w-full mt-8 gap-x-3 gap-y-8 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 isolate">
        {SchoolWorkersData.map((item, _i) => {
          return (
            <div key={_i} className="flex flex-col items-start">
              <div className="group cursor-pointer overflow-hidden relative rounded-xl w-full ">
                <Image
                  unoptimized
                  src={
                    "https://static.digiato.com/digiato/2022/07/Mr.-Qasemii-1.jpg.webp"
                  }
                  alt={item.name}
                  width={900}
                  height={900}
                  className=" w-full"
                />

                <div className="">
                  <div
                    className="group-hover:opacity-0 transition-opacity duration-200 absolute top-0 right-0 inset-0 bg-[#0e1b35] w-full"
                    style={{
                      mixBlendMode: "color",
                    }}
                  ></div>
                </div>
              </div>
              <section className="flex w-full items-center justify-between">
                <div className="font-bold sm:text-xl text-md mt-3">علی پورشرافتان</div>
              </section>
              <div className="font-thin sm:text-md text-sm text-slate-800 ">دکترای ریاضی کاربردی | <strong className="font-bold text-black">بهینه سازی</strong></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
