import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { SolanaResponseType, TransactionResponseType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getLastTxSignature(address: string): Promise<string> {
  const request = await fetch("https://api.devnet.solana.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getConfirmedSignaturesForAddress2",
      params: [
        address,
        {
          limit: 1,
        },
      ],
    }),
  });
  const response = (await request.json()) as SolanaResponseType;
  const signature = response.result[0].signature;
  return signature;
}

export async function getTxDetails(
  address: string,
  signature: string,
): Promise<number> {
  const request = await fetch("https://api.devnet.solana.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getTransaction",
      params: [signature],
    }),
  });

  const response = (await request.json()) as TransactionResponseType;
  const sender = response.result.transaction.message.accountKeys[0];
  const receiver = response.result.transaction.message.accountKeys[1];
  console.log("Sender:", sender);
  console.log("Receiver:", receiver);

  let result: number;
  if (sender === address) {
    result = 0;
  } else if (receiver === address) {
    result = 1;
  } else {
    result = -1;
  }
  return result;
}