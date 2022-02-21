import { ReactNode } from "react";

export interface SideBarComp {
    children: ReactNode;
    isOpen?: boolean;
    type?: string;
    onClick?: () => void;
  }