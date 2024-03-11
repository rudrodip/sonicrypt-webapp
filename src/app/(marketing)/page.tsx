import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { features } from "@/config/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Section className="">
      <Hero />
      <div className="w-full border-b py-3 text-center">Features</div>
      <div className="flex justify-between items-center border-b">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={cn(
              "w-full pl-2 md:pl-4 h-full",
              index !== 0 && "border-l"
            )}
          >
            <h1 className="text-2xl pb-3 md:pb-8 py-4 md:py-5">
              0{index + 1}. {feature.title}
            </h1>
            <p className="pb-4 md:pb-5">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
