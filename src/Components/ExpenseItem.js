import React from 'react'
import './ComponentDesign.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Aprill 13 2022</div>
      <div className='expense-item__description'>
        <h2>Laptop Service</h2>
        <div className='expense-item__price'>100rs</div>
      </div>
    </div>
  )
}

export default ExpenseItem
