import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './styles.css';

const Header = () => (
    <header className="main-header">
        <Logo />
        <Link to="/">
        <div className="logo-text">
            <span className="logo-text-1">BigGame</span>
            <span className="logo-text-2"> Surey</span>
        </div>
        </Link>
    </header>
);

export default Header;