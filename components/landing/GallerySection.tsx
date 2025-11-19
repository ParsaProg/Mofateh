import GallerySectionList from "../ui/GallerySection-List";

export default function GallerySection() {
  return <div className="mt-10 w-full flex flex-col items-start">
    <div className="flex flex-row items-center gap-x-5">
        <div className="shadow-[0px_0px_10px_5px] bg-blue-600 rounded-full p-2 transition-transform duration-200 animate-bounce shadow-blue-500 outline-blue-400 outline-2"></div>
        <h1 className="font-bold text-black text-4xl">
            گالری تصاویر
        </h1>
    </div>

    <div className="swiper-js-list w-full mt-5">
        <GallerySectionList pictures={[1, 2, 3, 4, 5]}/>
    </div>
  </div>
}
