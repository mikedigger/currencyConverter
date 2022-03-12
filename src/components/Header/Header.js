import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">Калькулятор обміну (конвертації) валют</h1>
            <p className="app-subtitle">Тут ви можете переглянути курс для обміну однієї іноземної валюти на іншу</p>
        </header>
    )
}

export default Header;