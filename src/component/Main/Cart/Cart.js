import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const salary =  props.salary;
    const name = props.name;
    console.log(name.length);
    const totalSalary = salary.reduce((total,cost)=>total+cost,0);
    return (
        <div className="cart">
            <h2>Total Selected Players: {name.length}</h2>
            <h4>Added Players Name:</h4>
            <p>{name}</p>
            <h5>Total Salary: <small>{totalSalary}{' '}</small>৳</h5>
        </div>
    );
};

export default Cart;