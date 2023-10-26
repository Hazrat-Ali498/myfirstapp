import React, { createContext, useState } from "react";
import { products, TopBrand, TopTrend } from "./Data";

export const Context = createContext();

const FrontContext = ({ children }) => {
  const [Item1, setItem1] = useState(products);
  const [Item2, setItem2] = useState(TopBrand);
  const [Item3, setItem3] = useState(TopTrend);

  return (
    <Context.Provider
      value={{ Item1, setItem1, Item2, setItem2, Item3, setItem3 }}
    >
      {children}
    </Context.Provider>
  );
};
export default FrontContext;
