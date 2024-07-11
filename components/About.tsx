import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { items } from "@components/data";

export default function About() {
  return (
    <section className="py-20 px-10 w-full h-fit">
    <BentoGrid className="mx-auto h-full">
      {items.map((item) => (
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
