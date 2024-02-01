import { FunctionComponent } from "react";
export type InputProps = {
  label?: string;
};
export const Input: FunctionComponent<InputProps> = ({ label }) => {
  return (
    <input
      placeholder={label}
      className="w-full py-[13px] bg-transparent px-[15px] border-b-2 border-dark transition-colors focus:border-primary font-semibold outline-none placeholder:text-black/50"
    />
  );
};
