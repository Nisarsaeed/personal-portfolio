import Image from "next/image";
import { Highlight } from "./ui/Highlight-Text";
import { serviceItems } from "@components/data";

const hexStyle = {
  clipPath:
    " polygon(0% 25%,0% 75%,50% 100%,100% 75%,100% 25%,50% 0)",
};

const Services = () => {
  return (
    <section id="services" className="h-screen w-full flex flex-col items-center">
       <h1 className="md:text-5xl text-center w-full font-bold sm:text-4xl">
          My<Highlight> services</Highlight>
        </h1>
      <div className="relative flex justify-center items-center h-[55%] w-1/3 mt-20">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            className={`absolute p-[2px] bg-purplePink inline-block ${item.position}  `}
            style={hexStyle}
          >
            <div
              className="flex justify-center bg-lightLavender items-center h-40 w-44 flex-col text-black  p-2"
              style={hexStyle}
            >
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="service section image"
                className=" h-10 object-contain"
              />
              <div className="text-sm">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
