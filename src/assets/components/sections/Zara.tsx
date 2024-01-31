import { FunctionComponent } from "react";
import zarabg from "./../../images/zara_background.png";
import zara from "./../../images/zara.png";
import { Button } from "../ui/button";
export const Zara: FunctionComponent = () => {
  return (
    <section className="relative my-16">
      <img src={zarabg} className="w-full" alt="" />
      <img src={zara} className="absolute top-8 -right-10 opacity-10" alt="" />
      <div className="text-white flex flex-col xl:gap-8 gap-4 2xl:gap-16 justify-end pb-4 lg:pb-8 xl:pb-16 absolute bottom-0 m 2xl:w-1/4 xl:w-[35%] lg:w-[40%] md:w-[50%] right-0 -translate-x-2/4">
        <img src={zara} className="w-[191px]" alt="" />
        <p className="leading-loose text-[26px]">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <div>
          <Button className="bg-white text-black">See Collection</Button>
        </div>
      </div>
    </section>
  );
};
