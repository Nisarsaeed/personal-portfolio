import Image from "next/image";
import { Highlight } from "./ui/Highlight-Text";
// import { serviceItems } from "@components/data";

const hexStyle = {
  clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
};

const Services = () => {
  return (
    <section
      id="services"
      className="h-fit w-screen flex flex-col  justify-center items-center relative py-20"
    >
      <h1 className="md:text-5xl text-center w-full font-bold sm:text-4xl">
        My<Highlight> services</Highlight>
      </h1>
      <div className="relative h-[450px] w-[1150px] mt-20">
        {serviceItems.map((item) => (
          <div
            key={item.id}
            className={`absolute p-[2px] bg-purplePink h-40 w-40 ${item.position}`}
            style={hexStyle}
          >
            <div
              className="flex justify-center bg-lightLavender items-center h-full w-full flex-col text-black p-2"
              style={hexStyle}
            >
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="service section image"
                className="h-10 object-contain m-2"
              />
              <div className="text-sm text-center">{item.title}</div>
            </div>
          </div>
        ))}
        <div className="absolute p-[2px] h-40 w-40 transform -translate-x-1/2 -translate-y-1/2" style={{ top: "50%", left: "50%" }}>
          <div className="flex justify-center bg-lightLavender items-center h-full w-full flex-col text-black p-2" style={hexStyle}>
            <span className="text-3xl font-bold">NS</span>
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
     position: "top-[9em] left-[19em]",
   },
   {
     id: 4,
     img: "/s4.png",
     title: "Database Management",
     position: "top-[9em] right-[19em]",
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

