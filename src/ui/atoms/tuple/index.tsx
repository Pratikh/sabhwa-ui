import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("font-[17px] font-bold", {
  variants: {
    variant: {
      default: "text-primary bg-[#F8F0FF] rounded-[23px]",
      secondary: "text-[#FFD600] ",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

const Tuple = React.forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, variant, size, text }, ref) => {
    const finalClassName = cn(buttonVariants({ variant, size, className }));
    return (
      <div className={finalClassName} ref={ref}>
        {text}
      </div>
    );
  }
);
Tuple.displayName = "Tuple";

export default Tuple;
