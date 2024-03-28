"use client"

import { useMemo, ReactNode } from "react"
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    MathWalletAdapter,
  } from "@solana/wallet-adapter-wallets";
  import {
    ConnectionProvider,
    WalletProvider,
  } from "@solana/wallet-adapter-react";
  import { clusterApiUrl } from "@solana/web3.js";

export const SolanaWalletProvider = ({ children }: { children: ReactNode }) => {
    const wallets = useMemo(
        () => [
          new PhantomWalletAdapter(),
          new SolflareWalletAdapter(),
          new MathWalletAdapter(),
        ],
        []
      );
    
      const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

    return (
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            {children}
          </WalletProvider>
      </ConnectionProvider>
    )
}