import React from 'react'
import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {

    return (
        <>
            {
                props.item.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price} />
                ))
            }
        </>
    )
}
