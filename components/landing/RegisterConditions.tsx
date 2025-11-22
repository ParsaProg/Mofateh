import LandingSectionTitle from "../ui/landingSectionTitle";

export default function RegisterConditionsLanding() {
  return (
    <div className="w-full mt-16">
      <LandingSectionTitle title="شریط ثبت‌نام" />
      <section className="flex items-center gap-x-10 mt-8">
        <div className="relative w-full rounded-2xl h-[600px] shadow-blue-200 shadow-[0px_0px_20px_5px]">
            <div className="bg-blue-500 rounded-2xl w-full h-[300px]"></div>
            <div className="p-5 rounded-2xl bg-[#ffffff7d] backdrop-blur-xl shadow-[#ffffff72] shadow-[0px_0px_20px_3px] mx-auto w-[95%] h-[400px] -mt-[100px]"></div>
        </div>
        <div className="relative w-full rounded-2xl h-[600px] shadow-blue-200 shadow-[0px_0px_20px_5px]"> <div className="bg-cyan-500 rounded-2xl w-full h-[300px]"></div>
            <div className="p-5 rounded-2xl bg-[#ffffffb7] backdrop-blur-xl shadow-[#ffffff72] shadow-[0px_0px_20px_3px] mx-auto w-[95%] h-[400px] -mt-[100px]"></div></div>
      </section>
    </div>
  );
}
