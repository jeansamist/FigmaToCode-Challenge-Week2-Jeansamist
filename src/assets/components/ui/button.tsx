/*
Thanks to the UI Shadcn library I modify the basic button component to bring it into line with that of the Figma model
*/
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        large:
          "bg-black text-lg text-black-foreground px-[26px] py-[19px] hover:bg-primary space-x-4",
        small:
          "bg-black text-xs text-black-foreground px-[15px] py-[5px] hover:bg-primary space-x-2",
        line: "bg-transparent text-xs text-black px-4 py-[10px] pt-0 space-x-2 border-b-2 border-black hover:text-primary hover:border-primary",
        simple:
          "bg-transparent text-sm text-black-foreground space-x-2 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "large",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // className={cn(buttonVariants({ variant, size, className }))}
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
