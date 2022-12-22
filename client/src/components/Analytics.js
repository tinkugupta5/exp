import React from 'react'

const Analytics = ({allTransection}) => {

  const totalTransaction = allTransection.length
  console.log("this is analytics value",totalTransaction);
  const totalIncomeTransactions = allTransection.filters(transaction => transaction ==='income')
  const totalExpenseTransactions = allTransection.filters(transaction => transaction ==='expense')
  const totalIncomePercent = (totalIncomeTransactions/totalTransaction)*100
  const totalExpensePercent = (totalIncomePercent/totalTransaction)*100




  return (
    <div>
      <h1>This is new</h1>

      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              Total Transactions : {totalTransaction}
            </div>
            <div className='card-body'>
              <h5>Income : {totalIncomeTransactions}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* 10:56 */}
    </div>
  )
}

export default Analytics
