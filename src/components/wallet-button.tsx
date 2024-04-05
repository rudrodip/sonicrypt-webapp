"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function WalletButton() {
  const { select, wallets, publicKey, disconnect } = useWallet();

  return !publicKey ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="font-link border-border" >Connect wallet</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogTitle>Connect wallet</DialogTitle>
        <div className="flex flex-col gap-3 items-start">
          {wallets.filter((wallet) => wallet.readyState === "Installed")
            .length > 0 ? (
            wallets
              .filter((wallet) => wallet.readyState === "Installed")
              .map((wallet) => (
                <button
                  key={wallet.adapter.name}
                  onClick={() => select(wallet.adapter.name)}
                  className="flex gap-3 w-full"
                >
                    <Image 
                        src={wallet.adapter.icon}
                        alt={wallet.adapter.name}
                        width={24}
                        height={24}
                    />
                  {wallet.adapter.name}
                </button>
              ))
          ) : (
            <p>No wallet found. Please download a supported Solana wallet</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <div>
      <Button size="sm" className="font-link leading" onClick={disconnect}>Disconnect wallet</Button>
    </div>
  );
}