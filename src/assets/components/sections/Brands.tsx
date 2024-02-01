import { FunctionComponent } from "react";
import { BRANDS } from "../../../lib/helpers/brands";

export const Brands: FunctionComponent = () => {
  return (
    <div className="container my-16 flex items-center flex-wrap justify-center gap-y-8 md:justify-between gap-4">
      {BRANDS.map((brand, key) => (
        <img
          src={brand}
          alt="brand"
          key={key}
          className="max-w-[200px] w-full"
        />
      ))}
    </div>
  );
};
