import { Button } from "@/components/ui/button";
import WalletButton from "@/components/wallet-button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto h-16 rounded-2xl flex justify-between items-center py-4 md:py-6 z-50">
      <Image 
        src="/logo/logo.svg"
        alt="logo"
        width={120}
        height={50}
      />
      <div className="rounded-lg border bg-secondary/50 backdrop-blur-sm flex items-center gap-10 py-1 px-8">
        <Link href="/" className="text-sm text-muted-foreground">Home</Link>
        <Link href="/#features" className="text-sm text-muted-foreground">Features</Link>
        <Link href="/user-guide" className="text-sm text-muted-foreground">User Guide</Link>
      </div>
      <WalletButton />
    </nav>
  )
}