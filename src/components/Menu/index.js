import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="AluraFlix Logo" className="Logo"/>
            </a>
            <Button as="a" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;