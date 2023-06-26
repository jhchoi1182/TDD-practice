import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

export interface ScoopCounts {
  Chocolate: number;
  Vanilla: number;
}
export interface ToppingCounts {
  Cherries: number;
  "M&Ms": number;
  "Hot fudge": number;
}
interface OptionCounts {
  scoops: ScoopCounts;
  toppings: ToppingCounts;
}
const initialState: OptionCounts = {
  scoops: { Chocolate: 0, Vanilla: 0 },
  toppings: { Cherries: 0, "M&Ms": 0, "Hot fudge": 0 },
};

const OrderDetails = createContext({
  optionCounts: initialState,
  totals: {
    scoops: 0,
    toppings: 0,
  },
  updateItemCount: (
    itemName: keyof ScoopCounts | keyof ToppingCounts,
    newItemCount: number,
    optionType: keyof OptionCounts
  ) => {},
  resetOrder: () => {},
});

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error("useOrderDetails must be called from within an OrderDetailsProvider");
  }
  return contextValue;
}

export function OrderDetailsProvider(props: any) {
  const [optionCounts, setOptionCounts] = useState<OptionCounts>(initialState);

  function updateItemCount(
    itemName: keyof ScoopCounts | keyof ToppingCounts,
    newItemCount: number,
    optionType: keyof OptionCounts
  ) {
    setOptionCounts((prev) => ({
      ...prev,
      [optionType]: {
        ...prev[optionType],
        [itemName]: newItemCount,
      },
    }));
  }

  function resetOrder() {
    setOptionCounts(initialState);
  }

  function calculateTotal(optionType: keyof OptionCounts) {
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };
  return <OrderDetails.Provider value={value} {...props} />;
}
