import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.instagram.com/faf.ngo/">
                            <i className="icon ion-social-instagram"/>
                        </a>
                        <a href="https://www.facebook.com/groups/utm.faf">
                            <i className="icon ion-social-facebook"/>
                        </a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a>Home</a>
                        </li>
                        <li className="list-inline-item">
                            <a>PBL Guide</a>
                        </li>
                        <li className="list-inline-item">
                            <a>Catalogue</a>
                        </li>
                    </ul>
                    <p className="copyright">PBL Depo© 2020</p>
                </footer>
            </div>
        </>
    )
}

export default Footer;
