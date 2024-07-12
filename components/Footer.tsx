import { IconBrandGithub, IconBrandLinkedin, IconBrandUpwork,IconBrandFacebook } from "@tabler/icons-react";
import { MagicButton } from "./ui/buttons";
import { Highlight } from "./ui/Highlight-Text";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-fit rounded justify-center mt-20 py-10 w-screen md:mt-10">
      <h1 className="md:text-5xl text-center font-bold sm:text-4xl lg:max-w-[60%] !leading-snug">
          Ready to take your <Highlight> digital
          presence </Highlight> to the next level?
        </h1>
        <p className="text-white-200 md:mt-7 my-4 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:saeed_nisar@yahoo.com" >
          <MagicButton
            title="Let's get in touch"
            // icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      <nav className="md:mt-7 my-4">
        <div className="grid grid-flow-col gap-6">
          <a href={"https://facebook.com/nisar.saeed.946/"} target="_blanck" className="border-neutral-800 border rounded-full p-2 hover:bg-neutral-700 hover:border-white hover:text-white">
            <IconBrandFacebook size={30}/>
          </a>
          <a href={"#about"} target="_blanck" className="border-neutral-800 border rounded-full p-2 hover:bg-neutral-600 hover:border-white hover:text-white">
          <IconBrandLinkedin size={30}/>
          </a>
          <a href={"https://github.com/Nisarsaeed"} target="_blanck" className="border-neutral-800 border rounded-full p-2 hover:bg-neutral-600 hover:border-white hover:text-white">
            <IconBrandGithub size={30}/>
          </a>
          <a href="http://upwork.com/" target="_blanck" className="border-neutral-800 border rounded-full p-2 hover:bg-neutral-600 hover:border-white hover:text-white">
            <IconBrandUpwork size={30}/>
          </a>
        </div>
      </nav>
      <aside className="md:mt-87 my-4">
        <p>Copyright © 2024 - Nisar Saeed Gondal</p>
      </aside>
    </footer>
  );
};

export default Footer;
