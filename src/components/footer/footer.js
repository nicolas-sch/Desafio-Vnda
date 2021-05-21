import React from 'react';
import './footer.css';


function Footer() {

    return (
        <>
        <div className="footer-container" id="footer">
            <div className="footer-wrapper">
                <div className="footer-menu1">
                    <h2>MENU</h2>
                    <div className="footer-submenu">
                        <a href="" target="_blank" >Contato</a>
                        <a href="" target="_blank" >Institucional</a>
                        <a href="" target="_blank" >Pedidos</a>
                        <a href="" target="_blank" >Pagamentos</a>
                    </div>
                </div>
                <div className="footer-menu2">
                    <h2>MENU</h2>
                    <input type="text" name="e-mail" placeholder="Email"/><i class="fas fa-paper-plane"></i>
                </div>
                <div className="footer-menu3">
                    <h2>MENU</h2>
                    <div className="footer-socials">
                        <i className='fab fa-linkedin-in'/><a href="" target="_blank" >@lojavirtual</a>
                        <i className='fab fa-instagram'/><a href="" target="_blank" >@lojavirtual</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;