import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

import FormInvestment from './Component/FormInvestment/FormInvestment';
import InvestmentFinal from './Component/InvestmentFinal/investmentFinal';
import InvestementFinalUnder5YearsOld from './Component/InvestementFinalUnder5YearsOld/InvestementFinalUnder5YearsOld'

function App() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(150.00);
  const [annualInterestRate, setAnnualInterestRate] = useState(10);
  const [numberOfYearsOfPlacement, setNumberOfYearsOfPlacement] = useState(42);

  const handleChange = useCallback(() => {
    console.log('lol');
    setInitialInvestment(i => document.getElementById('initialInvestment').value);
    setMonthlyInstallment(i => document.getElementById('monthlyInstallment').value);
    setAnnualInterestRate(i => {
      const value = document.getElementById('annualInterestRate').value;
      if (0 < value && value < 100) {
        return value;
      }else{
        document.getElementById('annualInterestRate').value = i;
        return i;
      }
    });
    setNumberOfYearsOfPlacement(i => document.getElementById('numberOfYearsOfPlacement').value);
  });

  console.log(initialInvestment, monthlyInstallment, annualInterestRate, numberOfYearsOfPlacement);
  return (
    <div className='container'>
      <h1 className='text-center'>Simulation d'intérêt composés</h1>
      <div className='row'>
        <div className="col-12">
          <FormInvestment
            initialInvestment={initialInvestment}
            monthlyInstallment={monthlyInstallment}
            annualInterestRate={annualInterestRate}
            numberOfYearsOfPlacement={numberOfYearsOfPlacement}
            onChange={handleChange}
          />
        </div>
        <div className="col-6"><InvestmentFinal /></div>
        <div className="col-6"><InvestementFinalUnder5YearsOld /></div>
      </div>
      <div className="row">

      </div>
    </div>
  );
}

export default App;
