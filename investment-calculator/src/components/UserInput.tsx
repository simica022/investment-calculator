import React from 'react';
import InputField from './InputField';



const UserInput: React.FC = () => {

    return (
        <section id='user-input'>
            <div className="input-group">
                <InputField label='Initial Investment' keyValue='initialInvestment' step={1000} />
                <InputField label='Annual Investment' keyValue='annualInvestment' />
            </div>
            <div className="input-group">
                <InputField label='Expected Return %' keyValue='expectedReturn' step={0.1} />
                <InputField label='Duration' keyValue='duration' step={5} />
            </div>
        </section>

    )
}

export default UserInput
