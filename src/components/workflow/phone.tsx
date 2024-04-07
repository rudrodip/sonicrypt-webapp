"use client";

import {
  SendHorizonalIcon,
  InfoIcon,
  LoaderIcon,
  CheckIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function PhoneAnimation() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
    }, 2000);
  };

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [success]);

  return (
    <div className="relative w-[300px] aspect-[1/2] border-4 rounded-lg flex flex-col justify-between items-center bg-background dark:bg-zinc-900 pb-3">
      <div
        id="punch-hole-camera"
        className="absolute w-3 h-3 rounded-full bg-black left-1/2 -translate-x-1/2 top-3"
      />
      {
        success ? (
          <SuccessScreen />
        ) : sending ? (
          <Loader />
        ) : (
          <Summary />
        )
      }
      <div className="w-full mb-2 px-2">
        <Button
        variant="default"
          className={cn(
            "w-full h-full rounded-full p-0",
            sending && "bg-secondary text-secondary-foreground",
          )}
          onClick={handleSend}
          disabled={sending}
        >
          {success ? "Close" : sending ? "Sending..." : "Send"}
        </Button>
        <div className="w-1/2 h-[3px] rounded-md bg-gray-500 mt-3 mx-auto"></div>
      </div>
    </div>
  );
}

const Summary = () => {
  return (
    <div className="w-full flex flex-col items-center px-2 aspect-[1/2]">
      <div className="w-14 h-14 rounded-full flex justify-center items-center border-2 mt-14">
        <SendHorizonalIcon size={32} strokeWidth={0} fill="#ef4444" />
      </div>
      <h1 className="font-heading text-5xl font-semilbold tracking-wide mt-5">
        0.1 SOL
      </h1>
      <h1 className="font-sans text-muted-foreground text-xl font-semilbold tracking-tight mt-2">
        $17.23
      </h1>
      <div className="flex flex-col justify-center items-center w-full rounded-md bg-secondary-foreground/10 mt-5">
        <div className="w-full p-3 flex justify-between items-center">
          <h1 className="text-muted-foreground">To</h1>
          <h1 className="font-semibold">HMgt...cC17</h1>
        </div>
        <Separator className="w-full bg-accent" />
        <div className="w-full p-3 flex justify-between items-center">
          <h1 className="text-muted-foreground">Network</h1>
          <h1 className="font-semibold">Solana Devnet</h1>
        </div>
        <Separator className="w-full bg-accent" />
        <div className="w-full p-3 flex justify-between items-center">
          <h1 className="text-muted-foreground flex justify-center items-center">
            Network fee{" "}
            <span className="ml-2">
              <InfoIcon size={10} />
            </span>
          </h1>
          <h1 className="font-semibold">$0.0043</h1>
        </div>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-full aspect-[1/2] flex flex-col justify-center items-center">
      <LoaderIcon size={30} className="animate-spin" />
      <h1 className="font-heading mt-2">Sending...</h1>
    </div>
  );
};

const SuccessScreen = () => {
  return (
    <div className="w-full aspect-[1/2] rounded-md flex flex-col justify-center items-center bg-gradient-to-b from-[#54a86b] to-transparent">
      <div className="flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full flex justify-center items-center border-2 border-[#54a86b]">
          <CheckIcon size={32} strokeWidth={2} stroke="#3de369" />
        </div>
        <h1 className="font-heading text-4xl font-semilbold tracking-wide mt-5">
          Sent!
        </h1>
        <h1 className="max-w-md text-center">Your tokens were successfully sent to HMgt...cC17</h1>
      </div>
    </div>
  );
};
