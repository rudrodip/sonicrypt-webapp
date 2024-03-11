"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DefaultGlyphButton } from "@/components/glyph-button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { devices } from "@/config/devices";

export default function Hero() {
  const [base, setBase] = useState(1);
  const [mini, setMini] = useState(2);
  const [micro, setMicro] = useState(3);

  return (
    <div className="w-full min-h-[95vh] flex border-b">
      <div className="w-full flex flex-col justify-between border-r">
        <div className="h-full py-4 md:py-10 pl-2 md:pl-4 border-b flex flex-col justify-between">
          <DefaultGlyphButton
            text={siteConfig.name}
            className="head-text p-0 m-0 text-left"
          />

          <p className="desc">{siteConfig.description}</p>
          <div className="w-full flex flex-wrap gap-4 md:gap-10">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "outline" }), "group")}
            >
              <p className="ml-6">Connect device</p>
              <ArrowRightIcon
                size={18}
                className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "default" }), "group")}
            >
              <p className="ml-6">Get started</p>
              <ArrowRightIcon
                size={18}
                className="ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full flex justify-between">
          <div className="absolute w-4 h-4 border-t border-l top-0 left-0 border-primary"></div>
          <div className="absolute w-4 h-4 border-t border-r top-0 right-0 border-primary"></div>
          <div className="absolute w-4 h-4 border-b border-l bottom-0 left-0 border-primary"></div>
          <div className="absolute w-4 h-4 border-b border-r bottom-0 right-0 border-primary"></div>

          <div className="relative w-full h-full border-r flex flex-col justify-center items-center cursor-pointer">
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                base === 1 && "opacity-100 translate-x-0"
              )}
            >
              <Image
                src={devices.base.image}
                alt={devices.base.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.base.name}</p>
            </div>
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                mini === 1 && "opacity-100 translate-x-0"
              )}
            >
              <Image
                src={devices.mini.image}
                alt={devices.mini.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.mini.name}</p>
            </div>
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                micro === 1 && "opacity-100 translate-x-0"
              )}
            >
              <Image
                src={devices.micro.image}
                alt={devices.micro.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.micro.name}</p>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-center items-center cursor-pointer">
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                base === 2 && "opacity-100 translate-x-0"
              )}
            >
              <Image
                src={devices.base.image}
                alt={devices.base.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.base.name}</p>
            </div>
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                mini === 2 && "opacity-100 translate-x-0"
              )}
            >
              <Image
                src={devices.mini.image}
                alt={devices.mini.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.mini.name}</p>
            </div>
            <div
              className={cn(
                "absolute w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out opacity-0 -translate-x-5",
                micro === 2 && "opacity-100 translate-x-0"
              )}
              onClick={() => {
                setMini(3);
                setMicro(2);
              }}
            >
              <Image
                src={devices.micro.image}
                alt={devices.micro.name}
                width={300}
                height={300}
              />
              <p className="pl-2 md:pl-4 w-full">{devices.micro.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={devices.micro.image}
          alt={devices.micro.name}
          width={500}
          height={500}
          className="h-full"
        />
        <div className="pl-2 md:pl-16 w-full">
          <h1 className="head-text-md">
            {devices.micro.name} {micro}
          </h1>
          <div className="pt-2">
            <h1 className="text-xl pb-2">Features: </h1>
            {devices.micro.features.map((feature, index) => (
              <p key={index}># {feature}</p>
            ))}
          </div>
          <Link
            href={devices.micro.doc}
            className={cn(buttonVariants({ variant: "link" }), "group m-0 p-0")}
          >
            <p className="pt-3 text-blue-300 hover:text-blue-400">
              Read documentation
            </p>
            <ArrowRightIcon
              size={18}
              className="mt-3 ml-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
