import Link from "next/link";
import { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
};

const base = `inline-flex items-center justify-center gap-3 rounded-sm font-medium transition duration-300 ease-out-expo active:scale-[0.98] cursor-pointer disabled:pointer-events-none disabled:opacity-50`;

const variants = {
  primary: "bg-text text-bg hover:bg-[#573a29]",
  secondary: "border border-gray-300 text-text hover:border-[#573a29] hover:text-[#573a29]",
  outline: "text-text hover:bg-surface",
};

const sizes = {
  md: "h-12 px-7 text-small",
  lg: "h-14 px-9 text-body",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps & { className?: string }) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props} />
  );
}
