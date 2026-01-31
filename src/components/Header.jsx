import React from 'react';
import logo from '../assets/Logo.png';

const Header = () => {
    const menuItems = [
        { label: '극단 소개', href: '#intro' },
        { label: '공연 정보', href: '#performance' },
        { label: '배우 소개', href: '#cast' },
        { label: '갤러리', href: '#gallery' },
        { label: '공지사항', href: '#notice' },
        { label: 'Contact', href: '#contact' },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <a href="#">
                    <img src={logo} alt="행복을 찾은 사람들" className="logo-img" />
                </a>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
