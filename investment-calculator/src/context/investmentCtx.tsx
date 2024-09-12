import React, { createContext, useState } from "react";

type InvestmentContextProviderProps = {
    children: React.ReactNode;
}

export type InvestData = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

type InvestDataType = {
    investData: InvestData;
    changeInvestment: (columnName: keyof InvestData, newValue: number) => void;
}

const defaultInvestData: InvestData = {
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10
}

const InvestmentContext = createContext<InvestDataType | undefined>(undefined);

export const InvestmentContextProvider: React.FC<InvestmentContextProviderProps> = ({ children }) => {
    const [investData, setInvestData] = useState<InvestData>(defaultInvestData);

    const changeInvestment = (columnName: keyof InvestData, newValue: number) => {
        setInvestData((prev) => ({
            ...prev,
            [columnName]: newValue
        }));
    }

    return (
        <InvestmentContext.Provider value={{ investData, changeInvestment }}>
            {children}
        </InvestmentContext.Provider>
    );
}

export { InvestmentContext };
