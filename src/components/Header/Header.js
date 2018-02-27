import React from 'react';
import logo from './logo.png';
import './Header.css';

export default function Header () {
    return(
        <header className='hp-header'>
            <img className='logo' src={logo} alt='logo'/>
        </header>
    )
}