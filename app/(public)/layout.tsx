import {ReactNode} from "react";

export default function PublicLayout({children}: {children: ReactNode}) {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
}
