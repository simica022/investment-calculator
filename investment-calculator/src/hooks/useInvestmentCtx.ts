import { useContext } from "react";
import { InvestmentContext } from "../context/investmentCtx";

const useInvestmentCtx = () => {
  const ctx = useContext(InvestmentContext);

  if (ctx === undefined) {
    throw new Error(
      "You cannot use here Investment Context"
    );
  }

  return ctx;
};

export default useInvestmentCtx;
