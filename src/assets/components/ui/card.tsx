import { motion } from "framer-motion";
import { ComponentProps, FunctionComponent } from "react";
import { FaInstagram, FaRegHeart, FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { cn } from "../../../lib/utils";
import { VARIANTS } from "../../../lib/variants";
import { Button } from "./button";
import { Ribbon } from "./ribbon";
interface CardProps extends ComponentProps<"div"> {
  hoverable?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({ children, ...props }) => {
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
          "bg-transparent hover:scale-105 transition-transform duration-300 ",
          props.className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const CardProduct: FunctionComponent<
  ComponentProps<"div"> & {
    discount?: number | string;
    image: string;
    ribbon?: false | "hot" | "sale";
    title: string;
    category: string;
    price: number | string;
  }
> = ({
  image,
  category,
  price,
  title,
  ribbon = "hot",
  discount = false,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col space-y-[18px] product-card",
        props.className
      )}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={title} />
        {ribbon && (
          <span className="absolute top-6 left-0">
            <Ribbon tag={ribbon} variant={ribbon} />
          </span>
        )}
        <div className="reveal absolute bottom-0 left-0 w-full transition-transform duration-00 px-[14px] py-[15px] bg-black text-black-foreground flex items-center justify-between">
          <div className="flex space-x-[21px] items-center">
            <FaRegHeart size={25} />
            <FaSearch size={25} />
          </div>
          <Button variant={"simple"}>
            <FaBagShopping /> <span>Shop now</span>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="opensans text-6xl">{title}</h3>
        <div className="flex justify-between">
          <div className="opensans text-dark/50">{category.toUpperCase()}</div>
          <div className="opensans text-6xl space-x-1">
            {typeof price === "number" ? (
              <span
                className={cn(
                  discount && "text-dark/50 text-[14px] line-through"
                )}
              >
                ${price}.00
              </span>
            ) : (
              <span
                className={cn(
                  discount && "text-dark/50 text-[14px] line-through"
                )}
              >
                {price}
              </span>
            )}
            {discount &&
              (typeof discount === "number" ? (
                <span className="text-primary">${discount}.00</span>
              ) : (
                <span className="text-primary">{discount}</span>
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export const CardItemCategory: FunctionComponent<
  ComponentProps<"div"> & {
    image: string;
    ribbon?: false | "hot" | "sale";
    category: string;
    products_number: number;
  }
> = ({ image, category, products_number, ribbon = "hot", ...props }) => {
  return (
    <Card
      className={cn(
        "flex flex-col space-y-[18px] product-card",
        props.className
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={category}
          className="aspect-square object-cover"
        />
        {ribbon && (
          <span className="absolute top-6 left-0">
            <Ribbon tag={ribbon} variant={ribbon} />
          </span>
        )}
        <div className="reveal text-6xl opensans absolute bottom-0 left-0 w-full transition-tansform duration-300 px-[14px] py-[15px] bg-black text-black-foreground flex items-center justify-between">
          <div>{category.toUpperCase()}</div>
          <div>{products_number} Product(s)</div>
        </div>
      </div>
    </Card>
  );
};

export const CardInstagramPost: FunctionComponent<
  ComponentProps<"div"> & {
    image: string;
  }
> = ({ image, ...props }) => {
  return (
    <Card
      className={cn(
        "flex flex-col space-y-[18px] product-card",
        props.className
      )}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={""} className="aspect-square object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-dark/50 text-dark-foreground opacity-0 hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
          <FaInstagram size={48} />
        </div>
      </div>
    </Card>
  );
};
