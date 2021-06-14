import React from 'react';
import { connect } from 'react-redux';
import { dipositMoney } from './../../redux/action-creators/index';

const Bank = (props: any) => {
    console.log('props from bank ', props);

    return (
        <div>
            <h2>this is bank</h2>
        </div>
    );
};

export default connect(null, dipositMoney(3))(Bank);