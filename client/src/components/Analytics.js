import React from 'react'
import { Progress, Space } from 'antd';

const Analytics = ({allTransection}) => {

  const totalTransaction = allTransection.length
  console.log("this is analytics value",totalTransaction);
  const totalIncomeTransactions = allTransection.filter(transaction => transaction.type ==='income')
  const totalExpenseTransactions = allTransection.filter(transaction => transaction.type ==='expense')
  const totalIncomePercent = (totalIncomeTransactions.length/totalTransaction)*100
  const totalExpensePercent =(totalExpenseTransactions.length / totalTransaction) * 100;




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
              <h5 className='text-success'>Income : {totalIncomeTransactions.length}</h5>
              <h5 className='text-danger'>Expense : {totalExpenseTransactions.length}</h5>
              <div>
              <Progress type="circle" strokeColor={'green'} percent={totalIncomePercent.toFixed(0)} className="mx-2" />
              <Progress type="circle" strokeColor={'red'} percent={totalExpensePercent.toFixed(0)} className="mx-2 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 14:32 */}
    </div>
  )
}

export default Analytics
