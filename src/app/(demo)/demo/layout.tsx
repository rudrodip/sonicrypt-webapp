import Navbar from "../_components/navbar";


type DemoLayoutProps = {
  children: React.ReactNode;
}

export default function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <main>
      <Navbar />
      {/* <div className="w-[100dvw] h-[100dvh] fixed top-0 left-0 -z-10 bg-red-500"></div> */}
      <div className="w-full h-full max-w-5xl mx-auto -translate-y-5">
        {children}
      </div>
    </main>
  )
}