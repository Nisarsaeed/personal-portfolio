"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Card";
import { Highlight } from "./ui/Highlight-Text";
import { projectItems } from "@components/data";
import { IconLocation } from "@tabler/icons-react";

const Projects = () => {
  return (
    <section className="h-fit w-full text-lightLavender">
      <div id="projects " className="h-full">
        <h1 className="md:text-5xl text-center font-bold text-3xl max-w-[80%] mx-auto">
          Few of my recent <Highlight>projects</Highlight>
        </h1>
        {/* project cards */}
        <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-10 gap-y-8">
          {projectItems.map((item) => {
           return (<CardContainer
              containerClassName="w-[80vw] h-fit sm:h-[41rem] h-[32rem] sm:w-[600px] lg:w-[40vw]" 
              className="h-full w-full"
              key={item.title}
            >
              <CardBody className="bg-transparent relative group/card hover:shadow-2x border-purpleBlue/[0.3] w-full h-full rounded-xl p-8 border  ">
                <CardItem
                  translateZ="50"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                >
                 {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-lavender mt-2 lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/b1.svg"
                    height="1000"
                    width="1000"
                    className="h-60 sm:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem className="flex items-center justify-between mt-7 mb-3 w-full">
                <div className="flex items-center">
                  {item.iconsList.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image width={100} height={100} src={icon} alt="prject icons" className="p-2" />
                    </div>
                  ))}
                </div>

                <CardItem className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Details
                  </p>
                  <IconLocation className="ms-3" color="#CBACF9" />
                </CardItem>
              </CardItem>
              </CardBody>
            </CardContainer>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
