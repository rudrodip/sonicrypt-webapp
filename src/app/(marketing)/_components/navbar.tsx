"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { DefaultGlyphButton } from "@/components/glyph-button";
import WalletButton from "@/components/wallet-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from "./mobile-navbar";
import { MenuIcon } from "lucide-react";
import ThemeToggler from "@/components/theme/theme-toggler";

export default function Navbar() {
  return (
    <header className="sticky top-3 flex justify-between items-center w-full max-w-5xl mx-auto rounded-2xl px-3 py-2 z-[5000] bg-secondary/30 backdrop-blur-lg overflow-hidden">
      <div className="flex items-center">
        <div className="lg:hidden mr-2 flex items-center">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex-col" side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <DefaultGlyphButton
                      text="Sonicrypt"
                      className="text-center flex items-center lowercase font-link"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">
          <DefaultGlyphButton
            text="Sonicrypt"
            className="text-center flex items-center lowercase font-link"
          />
        </Link>
        <div className="hidden md:block">
          <Link
            href="/user-guide"
            className={buttonVariants({ variant: "link" })}
          >
            User Guide
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <WalletButton />
        <ThemeToggler />
      </div>
    </header>
  );
}
