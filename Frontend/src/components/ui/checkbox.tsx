import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, ...props }, ref) => {
    return (
      <span className="relative inline-flex h-5 w-5 shrink-0">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          className={cn(
            "peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-[#eff2f8]",
            "transition-colors checked:border-[#3497e9] checked:bg-[#3497e9]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3497e9] focus-visible:ring-offset-2",
            className
          )}
          {...props}
        />
        <Check className="pointer-events-none absolute left-0.5 top-0.5 hidden h-4 w-4 text-white peer-checked:block" />
      </span>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
