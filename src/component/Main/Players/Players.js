import React, { useEffect, useState } from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Players = (props) => {
    const {image, name, salary} = props.info;
    return (
        <div className="players">
            <img src={image} alt=""/>
            <h4>Name: {name}</h4>
            <h5>Salary: {salary}</h5>
            <button className="btn btn-success btn-sm" onClick={()=>props.handlePlayerCart(props.info)}>add player <FontAwesomeIcon icon={faUserPlus} /></button>
        </div>
    );
};

export default Players;<h3>Players List</h3>