import './FormInvestment.css';

const FormInvestment = ({ initialInvestment, monthlyInstallment, annualInterestRate, numberOfYearsOfPlacement, onChange }) => {
  return (
    <>
      <h2>Votre Placement</h2>
      <form className='row'>
        <div className='col-6'>
          <label htmlFor="initialInvestment" className='form-label'>Placement initial ( en € )</label>
          <div className="input-group">
            <input type="number" id="initialInvestment" className='form-control' placeholder='Montant initial placé...'
              step={1} min={0}
              defaultValue={initialInvestment}
              onChange={onChange}
            />
            <span className="input-group-text">€</span>
          </div>
        </div>
        <div className="col-6">
          <label htmlFor="monthlyInstallment" className='form-label'>Versement mensuels ( en € )</label>
          <div className="input-group">
            <input type="number" id="monthlyInstallment" className='form-control' placeholder='Montant versé par mois...'
              step={0.01} min={0} 
              defaultValue={monthlyInstallment}
              onChange={onChange}
            />
            <span className="input-group-text">€</span>
          </div>
        </div>
        <div className="col-6">
          <label htmlFor="annualInterestRate" className='form-label'>Taux d'intérêt annuel ( en % )</label>
          <div className="input-group">
            <input type="number" id="annualInterestRate" className='form-control' placeholder='Taux de rendement...'
              step={0.01} min={0} max={100}
              defaultValue={annualInterestRate}
              onChange={onChange}
            />
            <span className="input-group-text">%</span>
          </div>
        </div>
        <div className="col-6">
          <label htmlFor="numberOfYearsOfPlacement" className='form-label'>Nombre d'année du placement</label>
          <div className="input-group">
            <input type="number" id="numberOfYearsOfPlacement" className='form-control' placeholder="Nombre d'année..."
              step={1} min={0}
              defaultValue={numberOfYearsOfPlacement}
              onChange={onChange}
            />
            <span className="input-group-text">année</span>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormInvestment; 