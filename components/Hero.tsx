import { GridBackgroundDemo } from "./ui/Grid-Background";
import { Highlight } from "./ui/Highlight-Text";
import { LitUpBtn } from "./ui/buttons";
const Hero = () => {
  return (
    <main className="relative flex flex-col justify-center items-center h-[100vh] w-full">
      <div className="relative h-full w-full flex flex-col justify-center items-center ">
      <p className="sm:text-6xl text-4xl  font-bold z-20  py-6 text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto ">
        Delivering Custom Solutions <br/>
        <Highlight>Tailored to Your Needs</Highlight>
      </p>
      <p className="text-md text-center mx-auto font-semibold md:text-lg z-20 lg:text-xl text-black py-4 max-w-7xl">
        Hi! I&apos;m Nisar, a Full Stack Developer based in Pakistan
      </p>
      <LitUpBtn text="Hire Me"  />
      </div>
    <GridBackgroundDemo />
    </main>
  );
};

export default Hero;
