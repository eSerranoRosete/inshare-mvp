import { navItems } from "@/config/AppConfig";
import { useActiveNav } from "@/hooks/store/useActiveNav";

import { Sidebar } from "./ui/Sidebar";
import { SidebarItem } from "./ui/SidebarItem";

interface IFAppShellProps {
  children: React.ReactNode;
}
export const AppShell = (props: IFAppShellProps) => {
  const activeNav = useActiveNav((state) => state.activeNav);
  const setActiveNav = useActiveNav((state) => state.setActiveNav);

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        {navItems.map((item, i) => (
          <SidebarItem
            onClick={() => setActiveNav(item.alias)}
            key={i}
            name={item.name}
            href={item.href}
            icon={item.icon}
            active={item.alias === activeNav}
          />
        ))}
      </Sidebar>
      {props.children}
    </div>
  );
};

interface IFAppContentProps {
  children: React.ReactNode;
}
export const AppContent = (props: IFAppContentProps) => {
  return <div className="w-full px-8 py-4">{props.children}</div>;
};

interface IFAppHeaderProps {
  heading: React.ReactNode;
}
export const AppHeader = (props: IFAppHeaderProps) => {
  return (
    <header className="flex h-14 items-end">
      <h1 className="grow text-3xl font-semibold">{props.heading}</h1>
      <div className="h-10 w-10 rounded-full bg-gray-950"></div>
    </header>
  );
};
