import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DefaultGlyphButton } from "@/components/glyph-button";
import WalletButton from "@/components/wallet-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex justify-between items-center w-full px-3 sm:px-10 py-2 md:py-2 lg:py-4 z-[5000] bg-secondary/30 backdrop-blur-lg overflow-hidden">
        <div className="flex items-center">
          <DefaultGlyphButton
            text="Sonicrypt"
            className="text-center flex items-center lowercase font-link"
          />
          <div className="hidden sm:block">
            <Link href="/about" className={buttonVariants({ variant: "link" })}>
              About
            </Link>
            <Link href="/docs" className={buttonVariants({ variant: "link" })}>
              User Guide
            </Link>
            <Link href="/docs" className={buttonVariants({ variant: "link" })}>
              Docs
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <WalletButton />
        </div>
      </header>
      <main className="w-full px-2 md:px-0">
        {children}
      </main>
    </section>
  );
}
