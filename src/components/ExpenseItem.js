import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);

    const [newTitle, setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState("");

    // Changes the title
    const changeTitle = (event) => {
        setNewTitle(event.target.value);
    }

    // Changes the Price
    const changePrice = (event) => {
        setNewPrice(event.target.value);
    }

    // Handle the changes
    const handleChange = () => {
        setTitle(newTitle);
        setPrice(newPrice);
    }

    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <input type="text" placeholder="change title" value={newTitle} onChange={changeTitle} required />
                    <button onClick={handleChange} class="btn btn-primary">Change title</button>

                    <div className="expense-item__price">${price}</div>
                    <input type="number" max="5000" min="1" placeholder="change $$$" value={newPrice} onChange={changePrice} required />
                    <button onClick={handleChange} class="btn btn-primary">Change Price</button>


                </div>
            </div>
        </>
    )
}
