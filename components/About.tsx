import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { bentoGridItems } from "@components/data";

export default function About() {
  return (
    <section className=" w-full h-fit">
    <BentoGrid className="mx-auto py-20 max-w-[80vw] h-full">
      {bentoGridItems.map((item) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
