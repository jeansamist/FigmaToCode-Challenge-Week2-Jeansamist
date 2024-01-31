import { FunctionComponent } from "react";
import { Title } from "../ui/title";
import { ItemTab } from "../ui/item-tab";
import { Button } from "../ui/button";
import { FaFilter } from "react-icons/fa";
import { PRODUCTS } from "../../../lib/helpers/products";
import { CardProduct } from "../ui/card";

export const Products: FunctionComponent = () => {
  return (
    <section className="container">
      <Title>Or subscribe to the newsletter</Title>
      <div className="mt-4 mb-8 flex justify-between items-center">
        <div className="flex gap-4">
          <ItemTab>All Products</ItemTab>
          <ItemTab variant={"disabled"}>T-Shirt</ItemTab>
          <ItemTab variant={"disabled"}>Hoodies</ItemTab>
          <ItemTab variant={"disabled"}>Jacket</ItemTab>
        </div>
        <Button variant={"small"}>
          <FaFilter /> <span>Filter</span>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {PRODUCTS.map((product, key) => (
          <CardProduct {...product} key={key} />
        ))}
      </div>
    </section>
  );
};
