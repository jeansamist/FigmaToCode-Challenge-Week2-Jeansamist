import { FunctionComponent } from "react";
import { FiSearch } from "react-icons/fi";
import { Button } from "../ui/button";
import logo from "./../../images/logo.svg";
import stroke from "./../../images/image-product-stroke.png";
import image from "./../../images/image-product.png";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const Hero: FunctionComponent = () => {
  return (
    <div className="bg-black/5 pb-16 mb-4 pt-8 ">
      <div className="container flex flex-col justify-between h-[56px] md:h-[113px]">
        <div className="grid grid-cols-3 w-full items-center">
          <FiSearch size={20} />
          <img src={logo} alt="logo" className="w-[180px] mx-auto" />
          <div className="space-x-4 sm:flex justify-end hidden">
            <Button variant={"simple"} className="text-dark">
              <FaUser size={20} /> <span>Account</span>
            </Button>
            <Button variant={"simple"} className="text-dark">
              <FaBagShopping size={20} /> <span>Account</span>
            </Button>
          </div>
        </div>
        <div className="h-px w-full bg-stroke"></div>
        <div className="lg:flex justify-between items-center hidden">
          <Button variant={"simple"} className="text-dark">
            Jewelry & Accessories
          </Button>
          <Button variant={"simple"} className="text-dark">
            Clothing & Shoes
          </Button>
          <Button variant={"simple"} className="text-dark">
            Home & Living
          </Button>
          <Button variant={"simple"} className="text-dark">
            Wedding & Party
          </Button>
          <Button variant={"simple"} className="text-dark">
            Toys & Entertainment
          </Button>
          <Button variant={"simple"} className="text-dark">
            Art & Collectibles
          </Button>
          <Button variant={"simple"} className="text-dark">
            Craft Supplies & Tools
          </Button>
        </div>
      </div>
      <div className="container flex gap-[102px] pt-32 items-center justify-between flex-col-reverse md:flex-row">
        <div className="space-y-[50px] text-center md:text-left">
          <h1 className="text-body font-light">Collections</h1>
          <p className="text-[30px] leading-loose">
            You Can Explore Ans Shop Many Differnt Collection
            <br /> From Various Barands Here.
          </p>
          <Button>
            <FaBagShopping /> <span>Shop Now</span>
          </Button>
        </div>
        <div className="relative max-w-[442px] w-full">
          <img src={stroke} alt="" className="w-full" />
          <img
            src={image}
            className="absolute top-0 left-0 z-20 w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
