"use client";

import { motion } from "framer-motion";
import ReactHowler from "react-howler";
import { useState, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getLastTxSignature, getTxDetails } from "@/lib/utils";

type ModuleProps = {
  children: React.ReactNode;
  triggerPlaying: boolean;
  listenToTx: boolean;
  listenToKeyboard: boolean;
};

export const Module = ({
  children,
  triggerPlaying,
  listenToTx,
  listenToKeyboard,
}: ModuleProps) => {
  const [isPlaying, setIsPlaying] = useState(triggerPlaying);
  const audioRef = useRef<ReactHowler>(null);

  const { publicKey } = useWallet();
  const walletAddress = publicKey?.toBase58();

  useEffect(() => {
    setIsPlaying(triggerPlaying);
  }, [triggerPlaying]);

  useEffect(() => {
    if (!listenToTx) return;
    let finalizedId: number | null = null;
    let confirmedId: number | null = null;
    let ws: WebSocket | null = null;

    const connectWebSocket = () => {
      if (!walletAddress) return;

      ws = new WebSocket("wss://api.devnet.solana.com");

      ws.onopen = () => {
        console.log("WebSocket connection opened");

        // Send the accountSubscribe request for finalized
        const subscribeRequestFinalized = {
          jsonrpc: "2.0",
          id: 1,
          method: "accountSubscribe",
          params: [
            walletAddress,
            { encoding: "jsonParsed", commitment: "finalized" },
          ],
        };

        // Send the accountSubscribe request for confirmed
        const subscribeRequestConfirmed = {
          jsonrpc: "2.0",
          id: 2,
          method: "accountSubscribe",
          params: [
            walletAddress,
            { encoding: "jsonParsed", commitment: "confirmed" },
          ],
        };

        ws?.send(JSON.stringify(subscribeRequestFinalized));
        ws?.send(JSON.stringify(subscribeRequestConfirmed));
      };

      ws.onmessage = async (event) => {
        console.log("Received message:", event.data);
        const parsedData = JSON.parse(event.data);

        if ("result" in parsedData) {
          const { result } = parsedData;
          if (typeof result === "number") {
            if (finalizedId === null) {
              finalizedId = result;
            } else if (confirmedId === null) {
              confirmedId = result;
            }
          }
        }

        if ("params" in parsedData) {
          const { params } = parsedData;
          const subscriptionId = params.subscription;

          if (subscriptionId === finalizedId) {
            const signature = await getLastTxSignature(walletAddress);
            console.log(`signature: ${signature}`);

            const result = await getTxDetails(walletAddress, signature);
            setIsPlaying(true);
            if (result === 0) {
              console.log("You sent a transaction!");
            } else if (result === 1) {
              console.log("You received a transaction!");
            } else {
              console.log("Unknown transaction type");
            }
          } else if (subscriptionId === confirmedId) {
            console.log("confirmed tx, waiting for finalized...");
            setIsPlaying(true);
          }
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket connection closed. Trying to reconnect...");
        setTimeout(connectWebSocket, 5000); // Reconnect after 5 seconds
      };
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [listenToTx, walletAddress]);

  useEffect(() => {
    if (!listenToKeyboard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "g") {
        if (audioRef.current) {
          audioRef.current.seek(0);
        }
        setIsPlaying(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying, listenToKeyboard]);

  return (
    <motion.div
      id="module"
      className="border-2 border-[#807F84] w-full aspect-square bg-[#F3F3F3] flex justify-between items-center z-20"
      initial={{
        borderTopRightRadius: "35%",
        borderTopLeftRadius: "0%",
        borderBottomLeftRadius: "0%",
        borderBottomRightRadius: "0%",
      }}
      animate={{
        scale: 1.3,
        borderTopRightRadius: "50%",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        transition: { duration: 1, delay: 2 },
      }}
      whileTap={{
        backgroundColor: "#66d968",
        transition: { duration: 0.3, delay: 0 },
      }}
      whileInView={{
        backgroundColor: isPlaying ? "#8cdbb3" : "#F3F3F3",
        scale: isPlaying ? 1.4 : 1.3,
        transition: { duration: 0.3, delay: 0 },
      }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <ReactHowler
        src="/audio/D.mp3"
        playing={isPlaying}
        onEnd={() => setIsPlaying(false)}
        ref={audioRef}
      />
      {children}
    </motion.div>
  );
};
