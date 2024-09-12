import React, { ChangeEvent } from 'react';
import useInvestmentCtx from '../hooks/useInvestmentCtx';
import { InvestData } from '../context/investmentCtx';



type InputFieldType = {
    label: string;
    keyValue: keyof InvestData
    step?: number;
}

const InputField: React.FC<InputFieldType> = ({ label, keyValue, step = 100 }) => {
    const { investData, changeInvestment } = useInvestmentCtx()
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const newValue = parseFloat(event.target.value);
        changeInvestment(keyValue, newValue)
    }


    return (
        <p>
            <label htmlFor={keyValue}>{label}</label>
            <input type='number'
                id={keyValue}
                value={investData[keyValue]}
                min={0}
                step={step}
                onChange={handleChange}
                required />
        </p>
    )
}

export default InputField
