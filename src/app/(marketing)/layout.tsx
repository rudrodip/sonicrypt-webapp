import Navbar from "./_components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 w-full px-2 md:px-0">
        {children}
      </main>
      <Footer />
    </section>
  );
}
