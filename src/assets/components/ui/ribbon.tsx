import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../../../lib/utils";
import { FunctionComponent } from "react";
export const ribbonVariants = cva(
  "w-[52px] h-[24px] flex items-center justify-center text-white text-[12px] opensans font-semibold",
  {
    variants: {
      variant: {
        hot: "bg-primary",
        sale: "bg-black",
      },
    },
    defaultVariants: {
      variant: "hot",
    },
  }
);

export type RibbonProps = VariantProps<typeof ribbonVariants> & {
  tag?: "hot" | "sale";
};

export const Ribbon: FunctionComponent<RibbonProps> = ({
  variant,
  tag = "hot",
}) => {
  return (
    <div className={cn(ribbonVariants({ variant }))}>{tag.toUpperCase()}</div>
  );
};
