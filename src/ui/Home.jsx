import { Outlet } from "react-router-dom";
import Hero from "../features/Hero/Hero";
import Nav from "../nav/Nav";
import SocialHandle from "../features/Hero/SocialHandle";
import About from "../features/About/About";
import Tools from "../features/Tools/Tools";
import Footer from "../features/Footer/Footer";

function Home() {
  return (
    <section className="flex flex-col h-screen justify-betwween laptop:gap-20 tablet:gap-40">
      <header className="flex flex-col items-center gap-15 laptop:gap-0 min-h-screen justify-normal laptop:justify-between tablet:justify-around  ">
        <Nav />
        <Hero />
        <SocialHandle />
      </header>
      <main className="flex flex-col gap-20 border-0">
        <Outlet />
        <About />
        <Tools />
        <Footer />
      </main>
    </section>
  );
}
export default Home;
