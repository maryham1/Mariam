import { TypeAnimation } from "react-type-animation";

function NameIntro() {
  return (
    <>
      <h1 className="font-geist  text-[26px] font-bold tracking-[-1px] laptop:tracking-[-6px] laptop:text-8xl tablet:tracking-[-3px] tablet:text-6xl">
        I'm{" "}
        <TypeAnimation
          sequence={["Olayiwola Mariam", 3000, "a Frontend Developer", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
    </>
  );
}

export default NameIntro;
