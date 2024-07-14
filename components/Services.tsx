import Image from "next/image";
import { Highlight } from "./ui/Highlight-Text";

const hexStyle = {
  clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
};

const Services = () => {
  return (
    <section
      id="services"
      className="h-fit w-screen flex flex-col  justify-center items-center relative py-20  text-lightLavender"
    >
      <h1 className="md:text-5xl text-center font-bold text-3xl max-w-[80%] mx-auto">
        My<Highlight> services</Highlight>
      </h1>
      <div className="relative h-[330px] w-[1030px] md:h-[450px] md:w-[1150px] lg:h-[900px] lg:w-[1500px] mt-20 ">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            className={`absolute p-[2px] bg-purplePink cursor-pointer h-28 w-28 md:h-40 md:w-40 lg:h-80 lg:w-80 ${item.position}`}
            style={hexStyle}
          >
            <div
              className="flex justify-center font-medium bg-darkBlue hover:bg-transparent hover:font-extrabold items-center h-full w-full flex-col p-2"
              style={hexStyle}
            >
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="service section image"
                className="h-7 md:h-10 lg:h-20 object-contain m-2 text-white filter-invert"
              />
              <div className="text-xs md:text-sm text-center lg:text-lg ">
                {item.title}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute p-[2px] h-28 w-28 md:h-40 md:w-40 lg:h-80 lg:w-80 transform -translate-x-1/2 -translate-y-1/2" style={{ top: "50%", left: "50%" }}>
          <div className="flex justify-center bg-darkBlue items-center h-full w-full flex-col text-lightLavender p-2" style={hexStyle}>
            <span className="font-bold text-7xl">NS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const serviceItems = [
  {
    id: 1,
    img: "/s1.png",
    title: "Frontend development",
    position: "top-0 left-[25em]",
  },
  {
    id: 2,
    img: "/s2.png",
    title: "Backend development",
    position: "top-0 right-[25em]",
  },
  {
    id: 3,
    img: "/s3.png",
    title: "Responsive Design",
    position:
      " top-[7em] left-[21em] md:top-[9em] md:left-[19em] lg:top-[18em] lg:left-[14em]",
  },
  {
    id: 4,
    img: "/s4.png",
    title: "Database Management",
    position:
      "top-[7em] right-[21em] md:top-[9em] md:right-[19em] lg:top-[18em] lg:right-[14em]",
  },
  {
    id: 5,
    img: "/s5.png",
    title: "Unit Testing & Error Fixing",
    position: "bottom-0 left-[25em]",
  },
  {
    id: 6,
    img: "/s6.png",
    title: "Mobile App Development",
    position: "bottom-0 right-[25em]",
  },
];
