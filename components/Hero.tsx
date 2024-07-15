import { GridBackgroundDemo } from "./ui/Grid-Background";
import { Highlight } from "./ui/Highlight-Text";
import { LitUpBtn } from "./ui/buttons";
const Hero = () => {
  return (
    <main className="relative flex flex-col justify-center items-center h-screen w-full px-7 text-lightLavender">
      <div className="relative h-full w-full flex flex-col justify-center items-center z-50">
      <p className="sm:text-6xl text-4xl  font-bold z-20  py-6 w-screen md:max-w-[80%] leading-relaxed lg:leading-snug text-center md:mx-auto px-4">
        Delivering Custom Solutions <br/>
        <Highlight>Tailored to Your Needs</Highlight>
      </p>
      <p className="text-md text-center mx-auto font-semibold md:text-lg z-20 lg:text-xl  py-4 max-w-7xl">
        Hi! I&apos;m Nisar, a Full Stack Developer based in Pakistan
      </p>
      <a href="https://www.upwork.com/freelancers/~01f56d5f1a2702f6c9" target="_blanck" className="h-fit w-fit">
      <LitUpBtn title="Hire Me"  />
      </a>
      </div>
    <GridBackgroundDemo />
    </main>
  );
};

export default Hero;
