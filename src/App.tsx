import { FunctionComponent } from "react";
import { Hero } from "./assets/components/sections/Hero";
import { Brands } from "./assets/components/sections/Brands";
import { Popular } from "./assets/components/sections/Popular";
import { Products } from "./assets/components/sections/Products";
import { Zara } from "./assets/components/sections/Zara";
import { BestSellers } from "./assets/components/sections/BestSellers";
import { Follows } from "./assets/components/sections/Follows";
import { Footer } from "./assets/components/sections/Footer";
const App: FunctionComponent = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Popular />
      <Products />
      <Zara />
      <BestSellers />
      <Follows />
      <Footer />
    </main>
  );
};

export default App;
