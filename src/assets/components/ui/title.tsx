import { FunctionComponent, PropsWithChildren } from "react";
export type TitleProps = PropsWithChildren;
export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <h1 className="text-2xl">{children}</h1>;
};
