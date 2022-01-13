import './InvestmentFinal.css';

const InvestmentFinal = ({compoundInterest}) => {
    return (
        <div>
            <h2>Placemnent Final</h2>
            <div>
                <p>Somme Investie  : {compoundInterest.pop().investmentSum}</p>
                <p>Intérêt Gagné  : {compoundInterest.pop().interestWin}</p>
                {/* <p>Somme Investie  : {compoundInterest.pop().investmentSum}</p> */}
            </div>
        </div>
    )
}

export default InvestmentFinal;