import { cn } from "@/lib/utils";

export default function Section({ children, className }: Props) {
  return (
    <section
      className={cn(
        className,
        "w-full max-w-[100%] md:max-w-[calc(100%-5rem)] lg:max-w-[calc(100%-8rem] border-r border-l mx-auto"
      )}
    >
      {children}
    </section>
  );
}

type Props = {
  children: React.ReactNode;
  className?: string;
};
