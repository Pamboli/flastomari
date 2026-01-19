import { PropsWithChildren } from "react";
import { locale } from "../locale";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-background text-text px-[16%] py-36 w-screen h-screen">
      <div className="flex flex-col h-full">
        <div className="w-full flex justify-between text-small font-semibold text-accent">
          <span>{locale.common.title}</span>
          <span>{locale.common.institution}</span>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
