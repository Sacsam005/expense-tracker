import React from 'react';
import './ExpenseDate.css';


export default function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'short' });
    const day = props.date.toLocaleString('en-US', { month: '2-digit' });


    return (
        <>
            <div className="expense-item__date">
                <div className="date-box">{day}-{month}-{year}</div>
            </div>

        </>
    )
}
