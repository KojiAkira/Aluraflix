import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../../componentes/Button/index'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/> 
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;