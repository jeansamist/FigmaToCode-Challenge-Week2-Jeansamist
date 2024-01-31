import { FunctionComponent } from "react";
import { CardItemCategory } from "../ui/card";
import { POPULARS } from "../../../lib/helpers/populars";
import { cn } from "../../../lib/utils";
import text from "./../../images/text.png";

export const Popular: FunctionComponent = () => {
  return (
    <div className="container relative grid grid-cols-4 gap-6 grid-rows-2 mb-16">
      {POPULARS.map((popular, key) => (
        <CardItemCategory
          {...popular}
          key={key}
          motionDivClass={cn(key === 0 && "col-span-2 row-span-2")}
        />
      ))}
      <div className="absolute bottom-0 h-4/5 -left-1">
        <img src={text} alt="" className="h-full object-contain z-0" />
      </div>
    </div>
  );
};
