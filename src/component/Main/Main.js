import React, { useEffect, useState } from 'react';
import './Main.css';
import Players from './Players/Players';

import players from '../../fakeData/data.json';
import Cart from './Cart/Cart';

const Main = () => {

    const [crickter,setCrickter] = useState([]);
    useEffect(()=>{
        setCrickter(players)
    },[])

    const [salary, setSalary] = useState([]);
    const [name, setName] = useState([]);

    const handlePlayerCart=(data)=>{
        const newSalary = [...salary, data.salary];
        setSalary(newSalary);
        const newName = [...name, data.name];
        setName(newName);  
    }
    return (
        <div className="mainBody">
            <div className="playersList">
                <h3>Players List</h3>
                {
                    crickter.map(info => <Players info={info} key={info.id} handlePlayerCart={handlePlayerCart}></Players>)
                }
            </div>
            <div className="playersCart">
                <h3>Added Players Cart</h3>
                <Cart name={name} salary={salary}></Cart>
            </div>
        </div>
    );
};

export default Main;