"use client";

import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";
import { cn } from "@components/utils/cn";
import { BackgroundGradientAnimation } from "./Background-Gradient";
import GridGlobe from "./Grid-Globe";
import { MagicButton } from "./buttons";
import Image from "next/image";
import { leftLists, rightLists } from "@components/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto lg:grid-rows-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const containerClasses = cn(
    id === 1
      ? "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh] md:min-h-[30vh]"
      : id === 2 || id === 3
      ? "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[30vh] md:min-h-[20vh]"
      : id === 5
      ? "md:col-span-3 md:row-span-2 lg:min-h-[40vh] md:min-h-[20vh]"
      : id === 6
      ? "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[40vh] md:min-h-[20vh]"
      : "",
    "relative overflow-hidden rounded-3xl m-2 border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
  );

  const imgClasses = cn(
    id === 1
      ? "w-full h-full"
      : id === 3
      ? "absolute right-0 bottom-0 md:w-96 w-60 opacity-50"
      : "",
    imgClassName,
    "object-cover object-center"
  );

  const titleClasses = cn(
    id === 1
      ? "justify-end"
      : id === 2
      ? "justify-start"
      : id === 5
      ? "justify-center"
      : id === 4
      ? "justify-start"
      : id === 3
      ? "justify-center md:justify-start lg:justify-center"
      : id === 6
      ? "justify-center md:max-w-full max-w-60 text-center absolute"
      : "",
    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-50"
  );

  return (
    <div
      className={containerClasses}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center relative"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={imgClasses}
              height={500}
              width={500}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              height={500}
              width={500}
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}
        <div className={titleClasses}>
          <div className="font-sans font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 5 && (
            <div className="flex gap-2 md:gap-4 lg:gap-5 w-fit absolute right-0 top-0 text-purpleDeep">
              <div className="flex flex-col gap-2 md:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-70 
                    rounded-lg  font-bold text-center bg-lightPink"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-purplePink"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-8 ">
                <span className="lg:py-4 lg:px-3 py-4 px-3   rounded-lg text-center bg-purplePink"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-70 
                    rounded-lg  font-bold text-center bg-lightPink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              ></div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IconCopy />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
