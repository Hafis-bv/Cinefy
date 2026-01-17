import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  isLink?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  isLink = false,
  href = "/",
  className,
  onClick,
}: ButtonProps) => {
  const btnClassName = clsx(
    "bg-primary text-white py-3 px-10 rounded-3xl font-semibold tracking-[2px] cursor-pointer border border-transparent xl:hover:border-primary xl:hover:bg-transparent xl:hover:text-primary transition-all duration-300",
    className
  );
  return (
    <>
      {isLink ? (
        <Link onClick={onClick} className={btnClassName} href={href}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className={btnClassName}>
          {children}
        </button>
      )}
    </>
  );
};
