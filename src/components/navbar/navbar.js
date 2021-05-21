import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                        <Link
                            onClick={closeMobileMenu}
                            activeClass="active2"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                        <a href="/"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Logo" /></a>
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Menu1
                                </Link>
                                 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Menu2
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Menu3
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="section4"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Menu4
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" class='nav-links' onClick={closeMobileMenu}>
                            <Link
                                onClick={closeMobileMenu}
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                Menu5
                            </Link>
                            </a>
                        </li>
                    </ul>
                    <div className="social-mobile" onClick={handleClick}>
                        <a href="" target="_blank" ><i class="fas fa-search"/></a>
                        <a href="" target="_blank" ><i class="fas fa-user-circle"/></a>
                        <a href="" target="_blank" ><i class="fas fa-shopping-basket"/></a>
                    </div>
                </div>
            </nav>  

        </>
    )
}

export default Navbar;