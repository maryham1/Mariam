function Patterns() {
  return (
    <>
      <div className="">
        <img
          src="\patterns\pattern-1.webp"
          className="hidden absolute left-0  w-[120px] h-[120px] animate-float1 laptop:block "
        />
      </div>
      <div>
        <img
          src="\patterns\pattern-2.webp"
          className="hidden absolute right-0 w-[150px] h-[240px] bottom-0 animate-float2 laptop:block"
        />
      </div>
    </>
  );
}

export default Patterns;
