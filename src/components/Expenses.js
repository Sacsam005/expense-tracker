import React from 'react'
import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {

    return (
        <>
            <ExpenseItem date={props.item[0].date} title={props.item[0].title} price={props.item[0].price} />
            <ExpenseItem date={props.item[1].date} title={props.item[1].title} price={props.item[1].price} />
            <ExpenseItem date={props.item[2].date} title={props.item[2].title} price={props.item[2].price} />
            <ExpenseItem date={props.item[3].date} title={props.item[3].title} price={props.item[3].price} />

            {/* 
            {
                props.expenses.map(e => (
                    <ExpenseItem date={e.date} title={e.title} price={e.price} key={e.id} />
                ))
            } */}
        </>
    )
}
