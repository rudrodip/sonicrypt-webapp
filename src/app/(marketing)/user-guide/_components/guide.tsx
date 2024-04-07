import Steps from "./steps";
import { VideoJs } from "@/components/video-component";

type StepsProps = {
  title: string;
  steps: string[];
  media: string;
};

export default function GuideSection({ title, steps, media }: StepsProps) {
  return (
    <section className="w-full max-w-6xl mx-auto my-6 md:my-12 lg:my-20">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between">
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
          <div className="relative w-[300px] aspect-[1/2] flex flex-col border-4 rounded-lg justify-between items-center bg-zinc-900 mx-auto">
            <div
              id="punch-hole-camera"
              className="absolute w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700 left-3 top-3 z-10"
            />
            <VideoJs
              options={{
                muted: true,
                sources: [
                  {
                    src: media,
                    type: "video/mp4",
                  },
                ],
              }}
              fallbackImageUrl="/logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
