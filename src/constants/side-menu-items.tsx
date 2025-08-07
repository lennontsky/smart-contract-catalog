import {
  MonoAnimation,
  MonoQrCodeScanner,
  MonoViewInAr,
} from "@kadena/kode-icons/system";
import React from "react";
import type { ISidebarToolbarItem } from "../types/Layout";
import Routes from "./routes";

const menuData: ISidebarToolbarItem[] = [
  {
    title: "Modules",
    icon: <MonoViewInAr style={{ maxWidth: "100%" }} />,
    href: "modules",
    items: [{ title: "Explorer", href: Routes.MODULE_EXPLORER }],
  },
];

export { menuData };
