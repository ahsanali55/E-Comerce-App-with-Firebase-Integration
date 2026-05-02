import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md bg-[#eff2f8] px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400",
          "border border-transparent outline-none transition-colors",
          "focus-visible:border-[#3497e9] focus-visible:ring-2 focus-visible:ring-[#3497e9]/20",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
