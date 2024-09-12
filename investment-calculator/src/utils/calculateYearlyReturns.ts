import { type InvestData } from "../context/investmentCtx";

type annualDataType = {
  year: number;
  initialInvestment: number;
  interest: number;
  totalGain: number;
  annualInvestment: number;
};

const calculateYearlyReturns = (investment: InvestData) => {
  const { initialInvestment, duration, expectedReturn, annualInvestment } =
    investment;
  const annualData: annualDataType[] = [];

  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (1 + expectedReturn / 100);
    const interest = interestEarnedInYear - investmentValue;
    const newInvestmentValue = interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      initialInvestment: investmentValue,
      interest,
      totalGain: investmentValue + interest,
      annualInvestment,
    });
    investmentValue = newInvestmentValue;
  }

  return annualData;
};

export default calculateYearlyReturns;

export type Currency = 'USD' | 'EUR';
export const getCurrencyFormatter  = (currency:Currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
