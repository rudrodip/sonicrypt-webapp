import type { Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type miniNavItem = {
  href: string;
  icon: Icon;
};

export type NavbarConfig = {
  mainNav: NavItem[];
  miniNav: miniNavItem[];
};

export type SocialIconProps = {
  Icon: LucideIcon;
  accountName: string;
  link: string;
  pfpLink?: string;
};

export type SolanaResponseType = {
  jsonrpc: string;
  result: [
    {
      blockTime: number;
      confirmationStatus: string;
      err: null;
      memo: null;
      signature: string;
      slot: number;
    }
  ];
  id: number;
}

export type TransactionResponseType = {
  jsonrpc: string;
  result: {
    blockTime: number;
    meta: {
      computeUnitsConsumed: number;
      err: null;
      fee: number;
      innerInstructions: any[];
      loadedAddresses: {
        readonly: any[];
        writable: any[];
      };
      logMessages: string[];
      postBalances: number[];
      postTokenBalances: any[];
      preBalances: number[];
      preTokenBalances: any[];
      rewards: any[];
      status: {
        Ok: null;
      };
    };
    slot: number;
    transaction: {
      message: {
        accountKeys: string[];
        header: {
          numReadonlySignedAccounts: number;
          numReadonlyUnsignedAccounts: number;
          numRequiredSignatures: number;
        };
        instructions: [
          {
            accounts: number[];
            data: string;
            programIdIndex: number;
            stackHeight: null;
          }
        ];
        recentBlockhash: string;
      };
      signatures: string[];
    };
  };
  id: number;
}
