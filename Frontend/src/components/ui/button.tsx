import * as React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  default: "bg-[#3497e9] text-white hover:bg-[#2388dc]",
  secondary: "bg-black text-white hover:bg-gray-900",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-3xl px-4 py-2 text-sm font-semibold tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3497e9] focus-visible:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
