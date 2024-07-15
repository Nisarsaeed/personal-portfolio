import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { MagicButton } from "./ui/buttons";
import { Highlight } from "./ui/Highlight-Text";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-fit rounded justify-center py-10 px-7 w-screen mt-10 text-lightLavender">
      <h1 className="md:text-5xl text-center w-full lg:max-w-[75%] font-bold text-3xl !leading-snug">
        Ready to take your <Highlight> digital presence </Highlight> to the next
        level?
      </h1>
      <p className="md:mt-7 my-4 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>
      <a href="mailto:saeed_nisar@yahoo.com">
        <MagicButton
          title="Let's get in touch"
          // icon={<FaLocationArrow />}
          position="right"
        />
      </a>
      <nav className="md:mt-7 my-4">
        <div className="grid grid-flow-col gap-6">
          <a
            href={"https://facebook.com/nisar.saeed.946/"}
            target="_blanck"
            className="border-purpleBlue border rounded-full p-2 hover:bg-purplePink  "
          >
            <IconBrandFacebook size={30} />
          </a>
          <a
            href={"https://www.linkedin.com/in/nisar-saeed/"}
            target="_blanck"
            className="border-purpleBlue border rounded-full p-2 hover:bg-purplePink  "
          >
            <IconBrandLinkedin size={30} />
          </a>
          <a
            href={"https://github.com/Nisarsaeed"}
            target="_blanck"
            className="border-purpleBlue border rounded-full p-2 hover:bg-purplePink  "
          >
            <IconBrandGithub size={30} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01f56d5f1a2702f6c9"
            target="_blanck"
            className="border-purpleBlue border rounded-full p-2 hover:bg-purplePink  "
          >
            <IconBrandUpwork size={30} />
          </a>
        </div>
      </nav>
      <aside className="md:mt-7 my-4 text-center">
        <p>Copyright © 2024 - Nisar Saeed Gondal</p>
      </aside>
    </footer>
  );
};

export default Footer;
