import Image from "next/image";
import Steps from "./steps";

type StepsProps = {
  title: string;
  steps: string[];
  media: string;
};

export default function GuideSection({ title, steps, media }: StepsProps) {
  return (
    <section className="w-full max-w-6xl mx-auto my-6 md:my-12 lg:my-20">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
          <h1 className="text-6xl font-semibold tracking-tight">{title}</h1>
          <div
            id={`steps-${title.toLowerCase()}`}
            className="w-full flex flex-col gap-5 lg:gap-10"
          >
            <Steps steps={steps} />
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center mt-5 md:mt-0">
          <Image
            src={media}
            alt={title}
            width={400}
            height={600}
            className="w-[66%] md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
