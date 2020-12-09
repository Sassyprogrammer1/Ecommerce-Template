import React from 'react';
import { Link } from 'react-router-dom';

import CartMenu from './partials/cart-menu';
import MainMenu from './partials/main-menu';
import LoginModal from '../features/modal/login-modal';
import SearchForm from './partials/search-form';

import { isIEBrowser } from '../../utils';

function Header( props ) {
    const phoneImage = "assets/images/demo/phone.png",
        badgePos = 2;

    function handleClick( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
        if ( isIEBrowser() && document.querySelector( "body" ).classList.contains( "mmenu-active" ) ) {
            document.querySelector( ".mmenu-active .mobile-menu-container" ).style.transform = "translateX(0)";
        }
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left d-none d-sm-block">
                        <p className="top-message text-uppercase">FREE Returns. Standard Shipping Orders $99+</p>
                    </div>

                    <div className="header-right header-dropdowns w-sm-100">
                        <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                            <Link to="#">Links</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/dashboard/account` }>Track Order </Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/about` }>About</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` }>Our Stores</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/blog` }>Blog</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/contact` }>Contact</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/about` }>Help &amp; FAQs</Link></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="header-dropdown">
                            <Link to="#">USD</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#">EUR</Link></li>
                                    <li><Link to="#">USD</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                            <Link to="#"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/en.png` } alt="England flag" />ENG</Link>
                            <div className="header-menu">
                                <ul>
                                    <li><Link to="#"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/en.png` } alt="England flag" />ENG</Link></li>
                                    <li><Link to="#"><img src={ `${ process.env.PUBLIC_URL }/assets/images/flags/fr.png` } alt="France flag" />FRA</Link></li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons">
                            <Link to="#" className="social-icon social-instagram icon-instagram" target="_blank"></Link>
                            <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank"></Link>
                            <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank"></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                        <button className="mobile-menu-toggler" type="button" onClick={ handleClick }>
                            <i className="icon-menu"></i>
                        </button>
                        <Link to={ `${ process.env.PUBLIC_URL }/` } className="logo">
                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/logo.png` } alt="Porto Logo" />
                        </Link>
                    </div>

                    <div className="header-right w-lg-max ml-0">
                        <SearchForm addClass="header-icon header-search-inline header-search-category w-lg-max pl-0" iconClass="icon-search-3" />

                        <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5 pr-4">
                            <img alt="phone" src={ `${ process.env.PUBLIC_URL }/` + phoneImage } width="30" height="30" className="pb-1" />
                            <h6>Call us now<Link to="#" className="text-dark font1">+123 5678 890</Link></h6>
                        </div>

                        <LoginModal addClass="header-icon" />

                        <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className="header-icon" title="Wishlist"><i className="icon-wishlist-2"></i></Link>

                        <CartMenu btnClass="btn-dark" />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header d-none d-lg-block">
                <div className="container">
                    <MainMenu active={ 0 } badgePos={ badgePos } />
                </div>
            </div>
        </header>
    )
}

export default Header;