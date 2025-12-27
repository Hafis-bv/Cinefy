import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div id={id || ""} className={clsx("max-w-3xl mx-auto", className)}>
      {children}
    </div>
  );
};
