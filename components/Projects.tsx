"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Card";
import Link from "next/link";
import { Highlight } from "./ui/Highlight-Text";
import { projectItems } from "@components/data";

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
                <div className="flex justify-between items-center mt-16">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-lightPink  text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
