import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/">Musik</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/">Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;