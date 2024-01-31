import popular1 from "./../../assets/images/popular/1.png";
import popular2 from "./../../assets/images/popular/2.png";
import popular3 from "./../../assets/images/popular/3.png";
import popular4 from "./../../assets/images/popular/4.png";
import popular5 from "./../../assets/images/popular/5.png";
export const POPULARS: {
  image: string;
  ribbon?: false | "hot" | "sale";
  category: string;
  products_number: number;
}[] = [
  {
    image: popular1,
    category: "Manto",
    products_number: 86,
    ribbon: false,
  },
  {
    image: popular2,
    category: "Pants",
    products_number: 200,
    ribbon: false,
  },
  {
    image: popular3,
    category: "Coat",
    products_number: 520,
    ribbon: "sale",
  },
  {
    image: popular4,
    category: "Shirt",
    products_number: 320,
    ribbon: false,
  },
  {
    image: popular5,
    category: "Jacket",
    products_number: 103,
    ribbon: false,
  },
];
