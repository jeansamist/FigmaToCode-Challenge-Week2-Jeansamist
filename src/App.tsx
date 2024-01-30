import { FunctionComponent } from "react";
import { Button } from "./assets/components/ui/button";
import { FaBagShopping } from "react-icons/fa6";
import { Ribbon } from "./assets/components/ui/ribbon";
import { ItemTab } from "./assets/components/ui/item-tab";
import { ItemMenu } from "./assets/components/ui/item-menu";
import { Input } from "./assets/components/ui/Input";
import { Title } from "./assets/components/ui/title";
import {
  CardInstagramPost,
  CardItemCategory,
} from "./assets/components/ui/card";
import bag from "./assets/images/products/1.png";
const App: FunctionComponent = () => {
  return (
    <main className="container">
      <Button variant={"simple"} className="">
        <FaBagShopping /> <span>Shop now</span>
      </Button>
      <Ribbon />
      <ItemTab variant={"disabled"}>Item</ItemTab>
      <ItemMenu variant={"small"}>Item</ItemMenu>
      <Input label="Email Address..." />
      <Title>Titre</Title>
      {/* <CardProduct
        category="bag"
        image={bag}
        price={"$180.00"}
        title="Nike Sportswear Futura Luxe"
        ribbon="hot"
        discount="$150.00"
        className="w-80"
      /> */}
      <CardItemCategory
        category="bag"
        image={bag}
        title="Nike Sportswear Futura Luxe"
        ribbon="hot"
        products_number={506}
        className="w-80"
      />
      <CardInstagramPost image={bag} className="w-80" />
    </main>
  );
};

export default App;
