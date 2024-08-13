import Footer from "@/components/footer";
import BG from "@/components/bg";
import Navbar from "./_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <BG />
      <Navbar />
      <main className="flex-1 w-full px-2 md:px-0">{children}</main>
      <Footer />
    </section>
  );
}
