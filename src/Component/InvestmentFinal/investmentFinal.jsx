import './InvestmentFinal.css';

const InvestmentFinal = ({compoundInterest}) => {
    return (
        <div>
            <h2>Placemnent Final</h2>
            <div>
                <p>Somme Investie  : {compoundInterest.investmentSum}</p>
                <p>Intérêt Gagné  : {compoundInterest.interestWin}</p>
                <p>Somme des intérêt  : {compoundInterest.interestSum}</p>
                <p>Total : {compoundInterest.investmentForInterest + compoundInterest.interestWin}</p>
            </div>
        </div>
    )
}

export default InvestmentFinal;