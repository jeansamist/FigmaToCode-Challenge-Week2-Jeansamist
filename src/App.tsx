import { FunctionComponent } from "react";
import { Button } from "./assets/components/ui/button";
import { FaBagShopping } from "react-icons/fa6";
const App: FunctionComponent = () => {
  return (
    <main>
      <Button variant={"simple"} className="">
        <FaBagShopping /> <span>Shop now</span>
      </Button>
    </main>
  );
};

export default App;
