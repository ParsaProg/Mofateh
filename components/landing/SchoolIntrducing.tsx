"use client";

import MofatehMainImage from "@/public/images/photo_2025-11-19_23-01-43.jpg";
import LandingSectionTitle from "../ui/landingSectionTitle";
import Image from "next/image";
import DoughnutChart from "../ui/charts/DoughnotChart";
import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { ChartNoAxesColumn, Medal } from "lucide-react";

export default function GallerySection() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = [
    {
      datasets: [
        {
          data: [72, 28],
          backgroundColor: ["#323D50", "#F2F4F7"],
          borderWidth: 0,
        },
      ],
    },
    {
      datasets: [
        {
          data: [93, 7],
          backgroundColor: ["#FFB600", "#F2F4F7"],
          borderWidth: 0,
        },
      ],
    },
    {
      datasets: [
        {
          data: [97, 3],
          backgroundColor: ["#02B719", "#F2F4F7"],
          borderWidth: 0,
        },
      ],
    },
  ];

  const schoolCatList = [
    "نمونه دولتی",
    "متوسط دوم نظری",
    "پسرانه",
    "جهرم",
    "فارس",
  ];
  return (
    <div className="mt-20 w-full flex flex-col items-start overflow-hidden">
      <LandingSectionTitle title="معرفی مدرسه" />

      <div className="w-full [@media(max-width:1190px)]:flex-col-reverse [@media(max-width:1190px)]:gap-y-5 flex items-start justify-between gap-x-10 mt-5">
        <div className="flex flex-col items-start gap-y-3">
          <h1 className="text-slate-800 font-bold text-xl">
            دبیرستان پسرانه نمونه دولتی شهید مفتح جهرم
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {schoolCatList.map((cat, _i) => {
              return (
                <div
                  className="shrink-0 text-sm font-bold rounded-lg bg-slate-200 p-2 transition-colors duration-200 hover:bg-slate-300 cursor-pointer"
                  key={_i}
                >
                  {cat}
                </div>
              );
            })}
          </div>
          <p className="text-lg text-slate-800 text-justify">
            متوسطه پسرانه شهیدمفتح جهرم در استان فارس از جمله بهترین مدارس نمونه
            دولتی می‌باشد. این مدرسه به دانش‌آموزان متوسطه‌ی دوم در رشته‌ها‌ی
            ریاضی، تجربی و انسانی، خدمات آموزشی ارائه می‌نماید. مدیریت مجموعه را
            آقای احقاق بر عهده دارد.
          </p>

          <div className="flex [@media(max-width:1430px)]:flex-col gap-y-13 items-start gap-x-13 w-full mt-5">
            <div className="">
              <section className="flex items-center gap-x-2">
                <ChartNoAxesColumn size={20} />
                <div className="text-2xl font-bold text-black">
                  امتیازات مدرسه
                </div>
              </section>
              <div className="flex items-center mt-3 gap-x-10 w-full">
                <div className="relative">
                  <DoughnutChart data={data[0]} options={options} />
                  <h1 className="absolute top-[50%] translate-y-[-50%] text-black right-[50%] translate-x-[50%] z-100">
                    {convertToFarsiNumbers("72%")}
                  </h1>
                  <h1 className="absolute -bottom-8 font-bold text-black right-[50%] translate-x-[50%] z-100">
                    معلمان
                  </h1>
                </div>
                <div className="relative">
                  <DoughnutChart data={data[1]} options={options} />
                  <h1 className="absolute top-[50%] translate-y-[-50%] text-black right-[50%] translate-x-[50%] z-100">
                    {convertToFarsiNumbers("93%")}
                  </h1>
                  <h1 className="absolute -bottom-8 font-bold text-black right-[50%] translate-x-[50%] z-100">
                    دانش‌آموزان
                  </h1>
                </div>
                <div className="relative">
                  <DoughnutChart data={data[2]} options={options} />
                  <h1 className="absolute top-[50%] translate-y-[-50%] text-black right-[50%] translate-x-[50%] z-100">
                    {convertToFarsiNumbers("97%")}
                  </h1>
                  <h1 className="w-full text-center absolute -bottom-8 font-bold text-black right-[50%] translate-x-[50%] z-100">
                    محبوبیت
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <section className="flex items-center gap-x-2">
                <Medal size={20} />
                <div className="text-2xl font-bold text-black">
                  رتبه‌ی مدرسه
                </div>
              </section>
              <div className="flex items-center gap-x-5  [@media(max-width:1190px)]:justify-center w-full">                <div className="flex flex-col items-center gap-y-2 text-center mt-3">
                  <h1 className="font-bold text-xl text-black">
                    {convertToFarsiNumbers("416")}
                  </h1>
                  <div className="text-white px-4 py-2 text-md font-bold bg-pink-600 rounded-md">
                    کشور
                  </div>
                  <h5 className="font-thin text-slate-600 text-xs w-full">
                    از
                    <strong className="font-bold text-black">
                      {convertToFarsiNumbers(" 18,086 ")}
                    </strong>
                    مدرسه
                  </h5>
                </div>
                <div className="flex flex-col items-center gap-y-2 text-center mt-3">
                  <h1 className="font-bold text-xl text-black">
                    {convertToFarsiNumbers("33")}
                  </h1>
                  <div className="text-white px-4 py-2 text-md font-bold bg-orange-600 rounded-md">
                    استان
                  </div>
                  <h5 className="font-thin text-slate-600 text-xs">
                    از{" "}
                    <strong className="font-bold text-black">
                      {convertToFarsiNumbers("1,291")}
                    </strong>{" "}
                    مدرسه
                  </h5>
                </div>
                <div className="flex flex-col items-center gap-y-2 text-center mt-3">
                 <h1 className="font-bold text-xl text-black">
                    {convertToFarsiNumbers("1")}
                  </h1>
                  <div className="text-white px-4 py-2 text-md font-bold bg-cyan-600 rounded-md">
                    ناحیه
                  </div>
                  <h5 className="font-thin text-slate-600 text-xs">
                    از{" "}
                    <strong className="font-bold text-black">
                      {convertToFarsiNumbers("39")}
                    </strong>{" "}
                    مدرسه
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={800}
          height={800}
          src={MofatehMainImage.src}
          alt="نمونه دولتی شهید مفتح | معرفی"
          className="rounded-xl [@media(min-width:1190px)]:w-[45vw] [@media(max-width:1190px)]:w-full w-[35vw]"
        />
      </div>
    </div>
  );
}
