import {
  CircleSlashed,
  Inbox,
  Layout,
  LayoutGrid,
  LineChart,
} from "lucide-react";

export const navItems = [
  {
    name: "Dashboard",
    href: "/",
    alias: "dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Studio",
    href: "/studio",
    alias: "studio",
    icon: Layout,
  },
  {
    name: "Analytics",
    href: "/analytics",
    alias: "analytics",
    icon: LineChart,
  },
  {
    name: "Interactions",
    href: "/interactions",
    alias: "interactions",
    icon: Inbox,
  },
];
