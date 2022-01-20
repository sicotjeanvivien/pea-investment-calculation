import './Calendar.css';

const Calendar = ({ compoundInterest }) => {
    return (
        <>
            <div className='row'>
                <div className='col-2'>Année</div>
                <div className="col-2">Somme Investie</div>
                <div className="col-2">Somme des intérêt</div>
                <div className="col-3">Intérêt Gagné</div>
                <div className="col-3">Total</div>
            </div>
            {
                compoundInterest.map((value, key) => {
                    return (
                        <div className='row border border-white' key={key}>
                            <div className='col-2'>{key+1}</div>
                            <div className='col-2'> {value.investmentSum}</div>
                            <div className='col-2'> {value.interestSum}</div>
                            <div className='col-3'> {value.interestWin}</div>
                            <div className='col-3'>{value.investmentSum  + value.interestWin}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Calendar;