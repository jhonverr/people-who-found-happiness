import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const menuItems = [
        { label: '극단 소개', href: '#intro' },
        { label: '공연 정보', href: '#performance' },
        { label: '배우 소개', href: '#cast' },
        { label: '갤러리', href: '#gallery' },
        { label: '공지사항', href: '#notice' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="header">
            <div className="logo-container">
                <a href="#">
                    <img src={logo} alt="행복을 찾은 사람들" className="logo-img" />
                </a>
            </div>
            <nav className="nav">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
