import { CircleSlashed } from "lucide-react";
import React from "react";

interface IFProps {
  children: React.ReactNode;
}
export const Sidebar = ({ children }: IFProps) => {
  return (
    <div className="flex w-full max-w-xs flex-col border-r border-gray-200 p-4 ">
      <div className="flex h-14 items-end">
        <div className="flex items-center gap-3 px-6 text-2xl font-semibold">
          <CircleSlashed />
          Inshare.it
        </div>
      </div>
      <hr className="my-5 border-none" />
      {children}
    </div>
  );
};
