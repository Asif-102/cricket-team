import React, { useEffect } from 'react';
import './Cart.css';
const Cart = (props) => {
    let salary =  props.salary;
    let name = props.name;
    // console.log(name.length);
    let totalSalary=salary.reduce((total,cost)=>total+cost,0);
    // console.log(newSalary);

    let size = name.length;
    let newName = name[size-1];
    let minusName = name.slice(0,-1);
    let addName = minusName.indexOf(newName);

    // if(addName == -1){
    //     name = props.name;
        return (
            <div className="cart">
                <h2>Total Selected Players: {name.length}</h2>
                <h4>Added Players Name:</h4>
                <ol>
                    {
                        name.map(player=><li>{player}</li>)
                    }
                </ol>
                <h5>Total Selected Players Salary: <small>{totalSalary}{' '}</small>৳</h5>
            </div>
        )
    // }
    // else{
    //     return alert('already added');
    // }
};

export default Cart;