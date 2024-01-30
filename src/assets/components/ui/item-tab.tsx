import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../../../lib/utils";
import { FunctionComponent, PropsWithChildren } from "react";
export const itemTabVariants = cva(
  "text-6xl opensans transition-colors hover:text-primary cursor-pointer",
  {
    variants: {
      variant: {
        active: "text-dark",
        disabled: "text-dark/50",
      },
    },
    defaultVariants: {
      variant: "active",
    },
  }
);

export type ItemTabProps = VariantProps<typeof itemTabVariants> &
  PropsWithChildren;

export const ItemTab: FunctionComponent<ItemTabProps> = ({
  variant,
  children,
}) => {
  return <span className={cn(itemTabVariants({ variant }))}>{children}</span>;
};
