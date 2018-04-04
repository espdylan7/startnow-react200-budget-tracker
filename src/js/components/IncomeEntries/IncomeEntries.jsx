import React from 'react';

import {
  updateIncomeDescription,
  updateIncomeAmount,
  addIncome
} from './incomeActions';

export default class IncomeEntries extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddIncome = this.handleAddIncome.bind(this);
  }

  render() {
    return (
      <div className='card border-danger mb-3'>
        <div className='card-header text-white bg-success'>Income Entries</div>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='expense-description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='income-description'
                value={ description }
                onChange={ this.handleDescriptionInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='income-amount'>Amount</label>
              <div className='input-group'>
                <span className='input-group-addon'>$</span>
                <input
                  type='text'
                  className='form-control'
                  id='income-amount'
                  value={ amount }
                  onChange={ this.handleAmountInput }
                />
              </div>
            </div>
            <button
              type='button'
              className='btn btn-success col-12 mb-5'
              onClick={ this.handleAddIncome }
            >+ Add Expense
            </button>
            <table className='table table-sm table-hover'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={ { width: 120 } } >Amount</th>
                </tr>
              </thead>
              <tbody>
                { lineItems.map(lineItem => (
                   <tr>
                     <td>{ lineItem.description }</td>
                     <td>{ lineItem.amount.toFixed(2)}</td>
                   </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}