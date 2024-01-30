import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../../../lib/utils";
import { FunctionComponent, PropsWithChildren } from "react";
export const itemMenuVariants = cva(
  "opensans transition-colors hover:text-primary cursor-pointer",
  {
    variants: {
      variant: {
        large: "text-xs text-dark",
        small: "text-black text-[14px]",
      },
    },
    defaultVariants: {
      variant: "large",
    },
  }
);

export type ItemMenuProps = VariantProps<typeof itemMenuVariants> &
  PropsWithChildren;

export const ItemMenu: FunctionComponent<ItemMenuProps> = ({
  variant,
  children,
}) => {
  return <span className={cn(itemMenuVariants({ variant }))}>{children}</span>;
};
