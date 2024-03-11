import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { DefaultGlyphButton } from "@/components/glyph-button";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <header className="flex justify-between items-center w-full mx-auto border-b bg-background">
        <Section className="flex justify-between items-center w-full">
          <div className="flex">
            <Link href="/about" className={buttonVariants({ variant: "link" })}>
              About
            </Link>
            <Link href="/docs" className={buttonVariants({ variant: "link" })}>
              Docs
            </Link>
          </div>
          <Link href="/" className="text-xl">
            <DefaultGlyphButton
              text="Sonicrypt"
              className="text-center flex items-center"
            />
          </Link>
          <div className="flex items-center">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "group hover:bg-transparent"
              )}
            >
              <p>Get started</p>
              <ArrowRightIcon
                size={18}
                className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </Section>
      </header>
      <main className="w-full">{children}</main>
    </section>
  );
}
