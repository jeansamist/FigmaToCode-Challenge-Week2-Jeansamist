import { cn } from "../../../lib/utils";
import { FunctionComponent, ComponentProps } from "react";
import { motion } from "framer-motion";
import { VARIANTS } from "../../../lib/variants";
interface CardProps extends ComponentProps<"div"> {
  hoverable?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  hoverable = false,
  ...props
}) => {
  return (
    <motion.div
      variants={VARIANTS}
      initial={"hiddenScale"}
      whileInView={"visibleScale"}
      viewport={{ once: true }}
    >
      <div
        {...props}
        className={cn(
          "duration-300 bg-card border border-accent rounded box-shadow-card hover:scale-105 transition-transform",
          hoverable &&
            "transition-colors bg-transparent hover:bg-card text-muted-foreground hover:text-foreground",
          props.className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const CardContent: FunctionComponent<ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  return <div className={cn("p-4", props.className)}>{children}</div>;
};

export const CardHeader: FunctionComponent<ComponentProps<"header">> = ({
  children,
  ...props
}) => {
  return (
    <header className={cn("p-4 pb-0", props.className)}>{children}</header>
  );
};
export const CardFooter: FunctionComponent<ComponentProps<"footer">> = ({
  children,
  ...props
}) => {
  return (
    <footer className={cn("p-4 pt-0", props.className)}>{children}</footer>
  );
};

export const CardTitle: FunctionComponent<ComponentProps<"h1">> = ({
  children,
  ...props
}) => {
  return (
    <h1 className={cn("text-xl md:text-3xl font-bold", props.className)}>
      {children}
    </h1>
  );
};
