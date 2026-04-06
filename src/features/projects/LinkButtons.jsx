function LinkButtons({ codeLink, projectURL, projectCode }) {
  return (
    <div className="flex gap-5 ">
      <button className="bg-white text-black text-center w-[130px] h-12 laptop:w-[170px] laptop:h-15 rounded-2xl hover:border-b-6 hover:border-stone-300">
        <a
          href={projectURL}
          className="capitalize  font-geist text-sm font-bold pointer laptop:text-xl"
        >
          live preview
        </a>
      </button>
      {codeLink && (
        <button className="bg-transparent border border-[1.5px] border-white text-white text-center   w-[130px] h-12 laptop:w-[170px] laptop:h-15 rounded-2xl hover:border-b-6 hover:border-white">
          <a
            href={projectCode}
            className="capitalize  font-geist text-sm font-bold pointer laptop:text-xl "
          >
            view code
          </a>
        </button>
      )}
    </div>
  );
}

export default LinkButtons;
