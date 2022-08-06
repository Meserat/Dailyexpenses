import React, { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    // useStates
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // functions
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')

    }
    return (
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">

                {/* Title */}


                <div className="new-expense__control">
                    <label>Title </label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />

                </div>
                {/* Amount */}
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />

                </div>

                {/* date */}
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />

                </div>

                {/* Button */}
                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>


        </form>
    )
}
export default ExpenseForm