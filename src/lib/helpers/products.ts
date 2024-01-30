import product1 from "./../../assets/images/products/1.png";
import product2 from "./../../assets/images/products/2.png";
import product3 from "./../../assets/images/products/3.png";
import product4 from "./../../assets/images/products/4.png";
import product5 from "./../../assets/images/products/5.png";
import product6 from "./../../assets/images/products/6.png";
import product7 from "./../../assets/images/products/7.png";
import product8 from "./../../assets/images/products/8.png";
export const PRODUCTS: {
  discount?: number | string;
  image: string;
  ribbon?: false | "hot" | "sale";
  title: string;
  category: string;
  price: number | string;
}[] = [
  {
    image: product1,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    price: "$63.85",
  },
  {
    image: product2,
    title: "Nike Sportswear Futura Luxe",
    category: "BAG",
    price: 130,
  },
  {
    image: product3,
    category: "Scarf",
    price: 53,
    title: "Geometric print Scarf",
  },
  {
    image: product4,
    category: "Dress",
    title: "Yellow Reserved Hoodie",
    price: 364,
    ribbon: "sale",
    discount: 155,
  },
  {
    image: product5,
    title: "Basic Dress Green",
    category: "Dress",
    price: 236,
    ribbon: "hot",
  },
  {
    image: product6,
    category: "shoe",
    title: "Nike Air Zoom Pegasus",
    price: 220,
    ribbon: "sale",
    discount: 198,
  },
  {
    image: product7,
    category: "Dress",
    price: "$120.50",
    title: "Nike Repel Miler",
  },
  {
    image: product8,
    category: "Glasses",
    price: 160,
    title: "Nike Sportswear Futura Luxe",
  },
];
