import classNames from "classnames";
import Link from "next/link";

interface IFProps {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  name,
  icon: Icon,
  href,
  active,
  onClick,
}: IFProps) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={classNames(
        "flex items-center gap-4 rounded-md px-6 py-2 text-left text-sm font-medium ",
        active ? "bg-gray-950 text-gray-50 antialiased" : "hover:bg-gray-200"
      )}
    >
      <Icon className="w-5" />
      {name}
    </Link>
  );
};
