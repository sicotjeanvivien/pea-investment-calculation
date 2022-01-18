import './InvestmentFinal.css';

const InvestmentFinal = ({compoundInterest}) => {
    console.log(compoundInterest);
    return (
        <div>
            <h2>Placemnent Final</h2>
            <div>
                <p>Somme Investie  : {compoundInterest.investmentSum}</p>
                <p>Intérêt Gagné  : {compoundInterest.interestWin}</p>
                {/* <p>Somme Investie  : {compoundInterest.pop().investmentSum}</p> */}
            </div>
        </div>
    )
}

export default InvestmentFinal;