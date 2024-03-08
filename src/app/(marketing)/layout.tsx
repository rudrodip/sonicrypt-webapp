import { Icons } from "@/components/icons";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <header className="flex justify-between items-center w-full px-10 sticky top-0 mx-auto border">
        <Button size="icon" variant="ghost">
          <Image
            src="/logo.png"
            alt="sonicrypt"
            width={30}
            height={30}
            className="w-full h-full"
          />
        </Button>
        <DefaultNavbar />
        <ThemeToggler />
      </header>
      <main className="w-full">{children}</main>
      <footer>
        <p></p>
      </footer>
    </section>
  );
}
