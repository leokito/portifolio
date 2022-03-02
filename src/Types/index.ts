import { ReactNode } from "react";

export interface SideBarComp {
    children: ReactNode;
    isOpen?: boolean;
    type?: string;
    onClick?: () => void;
  };

export interface ButtonElement {
  children: ReactNode;
  primary: boolean;
  dark: boolean;
  big: boolean;
  bigFont: boolean;
};

export interface IinfoContainer {
  lightBg: boolean;
}

export interface infoRowComp {
  imgStart: boolean;
};

export interface HeadingComp {
  lightTxt: boolean;
};

export interface iSubtitle {
  darkTxt: boolean;
};

export interface iAboutObj {
  id: string;
  lightBg: boolean;
  lightTxt: boolean;
  lightTxtDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: any;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkTxt: boolean;
};

export interface iProjectCard {
  onClick?: ()=> void;
  img: any;
};