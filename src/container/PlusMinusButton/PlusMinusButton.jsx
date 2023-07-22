import React from 'react';
import './PlusMinusButton.css';

const PlusMinusButton = ({ statePlus }) => {
    return (
        <button
            className={`cross ${statePlus ? 'open' : ''}`}
            onClick={() => { }}
        >
            <div className={`horizontal ${statePlus ? 'open' : ''}`}></div>
            <div className={`vertical ${statePlus ? 'open' : ''}`}></div>
        </button>
    );
};

export default PlusMinusButton;
