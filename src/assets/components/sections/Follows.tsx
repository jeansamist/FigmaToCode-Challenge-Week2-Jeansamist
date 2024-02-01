import { FunctionComponent } from "react";
import { Title } from "../ui/title";
import { CardInstagramPost } from "../ui/card";
import { FOLLOWS } from "../../../lib/helpers/follows";
import { Input } from "../ui/Input";
import { Button } from "../ui/button";

export const Follows: FunctionComponent = () => {
  return (
    <section className="py-[100px] bg-black/5 my-32">
      <div className="container flex flex-col gap-[70px]">
        <Title>Follow Products And Discounts On Instagram</Title>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {FOLLOWS.map((follow, key) => (
            <CardInstagramPost image={follow} key={key} />
          ))}
        </div>
        <Title>Or Subscribe To The Newsletter</Title>
        <div className="flex items-end gap-4 justify-center">
          <div className="max-w-[600px] w-full">
            <Input label="Email Address..." />
          </div>
          <Button variant={"line"}>SUBMIT</Button>
        </div>
      </div>
    </section>
  );
};
