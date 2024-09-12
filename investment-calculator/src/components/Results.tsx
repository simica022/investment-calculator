import { ChangeEvent, useState } from "react";
import useInvestmentCtx from "../hooks/useInvestmentCtx";
import calculateYearlyReturns, { getCurrencyFormatter, type Currency } from "../utils/calculateYearlyReturns";

const Results = () => {
    const { investData } = useInvestmentCtx();
    const results = calculateYearlyReturns(investData);
    const [slider, setSlider] = useState({
        min: 0,
        max: 1,
        value: 0
    })
    const currencies: Currency[] = ['USD', 'EUR'];
    const currentCurrency = currencies[slider.value];
    const formatter = getCurrencyFormatter(currentCurrency);

    const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setSlider((prevSlider) => ({
            ...prevSlider,
            value: newValue
        }));
    };

    return (
        <div className="results">
            <input id="currency-slider" 
                type="range" min={slider.min} max={slider.max} 
                value={slider.value}
                onChange={handleSliderChange} 
                title={`change currency to ${currencies[1 - slider.value]}`}/>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total interest</th>
                        <th>Annual investment</th>
                    </tr>

                </thead>
                <tbody>
                    {results.map((yearlyData) => {
                        return (
                            <tr key={yearlyData.year}>
                                <td>{yearlyData.year}</td>
                                <td>{formatter.format(yearlyData.initialInvestment)}</td>
                                <td>{formatter.format(yearlyData.interest)}</td>
                                <td>{formatter.format(yearlyData.totalGain)}</td>
                                <td>{formatter.format(yearlyData.annualInvestment)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Results
