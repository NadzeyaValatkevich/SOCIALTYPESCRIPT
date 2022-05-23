import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: null | string,
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/cc5ce984-b9cb-4e16-83de-eecd3683dbbf/d5op8n0-b0e3f25a-075a-4c90-9c7f-d9995ea9df25.gif"
                alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;