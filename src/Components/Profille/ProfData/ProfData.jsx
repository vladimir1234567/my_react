import React from 'react';
import s from './ProfData.module.css';
import sea from '../../../Img/sea.jpg';
import ava from '../../../Img/ava.jpg';

const ProfData = () => {
    return (
        <div>
        <img src={sea} alt='sea' />
        <div className={s.userData}>
            <img src={ava} alt='user-ava' />
            <div className={s.nameData}>
                <h3>Mr. Bin</h3>
                <p>Actor comic</p>
            </div>
        </div>
        </div>
    );
}
export default ProfData;