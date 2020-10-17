import React from 'react';
import Header from './HeaderAndHire/Header/Header';
import Hire from './HeaderAndHire/HireUs/Hire';
import "../../../src/Components/Home/Home.css";

const HeaderAndHire = () => {
    return (
        <div className="background">
            <Header/>
            <Hire/>
        </div>
    );
};

export default HeaderAndHire;