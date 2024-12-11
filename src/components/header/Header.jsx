import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import { links } from '../../Data';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import { FaStream } from 'react-icons/fa';
import './header.css';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const changeHeader = () => {
        if(window.scrollY >= 80){
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    };

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    useEffect (() => {
        window.addEventListener('scroll', changeHeader);
    }, []);

    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''}
        header`}>
            <nav className='nav container'>
                <Link to='/' onClick={scrollTop} className='nav_logo'>
                    <img src={logo} alt='' className='nav_logo-img' />
                </Link>

                <div className={`${showMenu ? 'show-menu' : ''}
        nav_menu`}>
                    <ul className='nav_list'>
                        {links.map(({name, path}, index) => {
                            return (
                                <li className='nav_item' key={index}>
                                    <Link spy={true} 
                                          smooth={true} 
                                          offset={-60}
                                          hashSpy={true} 
                                          duration={500} 
                                          to={path} 
                                          className='nav_link'
                                          onClick={() => setShowMenu
                                            (!showMenu)
                                        }>
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className='nav_toggle' onClick={() => setShowMenu
                    (!showMenu)
                }>
                    <FaStream />
                </div>
            </nav>
        </header>
    )
}

export default Header