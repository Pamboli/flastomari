import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ActionText({ children }: Props) {
  return <h2 className="text-small font-medium animate-pending">{children}</h2>;
}
