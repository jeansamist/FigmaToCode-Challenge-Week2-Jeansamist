import { FunctionComponent } from "react";
import { Title } from "../ui/title";
import { ItemTab } from "../ui/item-tab";
import { Button } from "../ui/button";
import { PRODUCTS } from "../../../lib/helpers/products";
import { CardProduct } from "../ui/card";

export const BestSellers: FunctionComponent = () => {
  return (
    <section className="container mt-16">
      <Title>Best Sellers</Title>
      <div className="mt-4 mb-8 flex justify-between items-center flex-col md:flex-row gap-4">
        <div className="flex gap-4">
          <ItemTab>All Products</ItemTab>
          <ItemTab variant={"disabled"}>T-Shirt</ItemTab>
          <ItemTab variant={"disabled"}>Hoodies</ItemTab>
          <ItemTab variant={"disabled"}>Jacket</ItemTab>
        </div>
        <Button variant={"small"}>Show All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[PRODUCTS[4], PRODUCTS[1], PRODUCTS[3], PRODUCTS[5]].map(
          (product, key) => (
            <CardProduct {...product} key={key} />
          )
        )}
      </div>
    </section>
  );
};
