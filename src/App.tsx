import { FunctionComponent } from "react";
import { Hero } from "./assets/components/sections/Hero";
import { Brands } from "./assets/components/sections/Brands";
import { Popular } from "./assets/components/sections/Popular";
import { Products } from "./assets/components/sections/Products";
import { Zara } from "./assets/components/sections/Zara";
import { BestSellers } from "./assets/components/sections/BestSellers";
const App: FunctionComponent = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Popular />
      <Products />
      <Zara />
      <BestSellers />
    </main>
  );
};

export default App;
