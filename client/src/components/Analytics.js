import React from 'react'

const Analytics = ({allTransection}) => {

  const totalTransaction = allTransection.length
  const totalIncomeTransactions = allTransection.filters(transaction => transaction ==='income')
  const totalExpenseTransactions = allTransection.filters(transaction => transaction ==='expense')




  return (
    <div>
      <h1>This is new</h1>

      {/* 10:56 */}
    </div>
  )
}

export default Analytics
