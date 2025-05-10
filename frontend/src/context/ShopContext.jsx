import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const value = {};

const ShopContextProvider = (props) => {
  // define your own variables & methods & states
  const currency = "$";

  const value = { currency };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
