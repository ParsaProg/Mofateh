export default function LandingSectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-x-3">
      <div className=" bg-blue-600 rounded-sm w-3 h-10 transition-transform duration-200"></div>
      <h1 className="font-bold text-black lg:text-4xl md:text-3xl text-2xl">{title}</h1>
    </div>
  );
}
