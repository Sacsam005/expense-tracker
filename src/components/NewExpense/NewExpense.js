import React from 'react'
import Expenseform from './Expenseform';
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseData = (updatedExpenseData) => {

        const expenseData = {
            ...updatedExpenseData
        }

        props.onClickSave(expenseData);
        console.log(expenseData);
    }



    return (
        <>
            <div className="new-expense">
                <Expenseform onClickSaveExpenses={saveExpenseData} />
            </div>
        </>
    )
}

export default NewExpense;