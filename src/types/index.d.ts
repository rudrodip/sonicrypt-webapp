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