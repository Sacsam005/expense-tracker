import React from 'react'
import Expenses from './components/Expenses';
import Navbar from './components/Navbar';

const App = () => {
    let expenses = [
        {
            id: 'e1',
            title: 'College Fee',
            price: 2000,
            date: new Date(2022, 1, 4)
        },
        {
            id: 'e2',
            title: 'Rent',
            price: 500,
            date: new Date(2022, 1, 4)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            price: 60,
            date: new Date(2022, 1, 4)
        },
        {
            id: 'e4',
            title: 'Miscellaneous',
            price: 200,
            date: new Date(2022, 1, 4)
        }
    ];


    return (
        <>
            <Navbar />
            <h2 className="text-center my-2">Let's get started</h2>
            <Expenses item={expenses} />
        </>
    )
}

export default App;