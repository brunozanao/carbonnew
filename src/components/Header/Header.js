import React from 'react';

export default function Header() {
    const [ defuse, setDefuse ] = React.useState(false);
    const [ fixer, setFixer ] = React.useState(false);
    const handleClick = () => {
        setDefuse(!defuse);
    };
    const setClass = (boolean ,text) => {
        return boolean ? text : '';
    }
    const styleTransform = (boolean, text) => {
        if(boolean) {
            return text;
        } else {
            return '';
        }
    }
    const headerFixer = () => {
        return window.scrollY > 150 ? setFixer(true) : setFixer(false);
    }
    window.addEventListener('scroll', headerFixer);

    return (
        <>
        <header className={setClass(fixer, 'fixer')}>
            <section className='box-container'>
                <div className='header__container'>
                    <div className='header__container-logo'>
                        <img src="/carbon.png" alt="logo" />
                    </div>
                    <div onClick={handleClick} className={`header__container-menu ${setClass(defuse ,'active')}`}>
                        <div className='trigger'>
                            <p>Menu</p>
                            <div className='hamb'>
                                <div className='hamb-1'></div>
                                <div className='hamb-2'></div>
                                <div className='hamb-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div className="Navbar box-container">
            <div className={`Navbar-overlay ${setClass(defuse ,'open')}`}></div>
            <div className={`Navbar-content ${setClass(defuse ,'open')}`}>
                <div onClick={handleClick} className={`trigger__container ${setClass(defuse ,'active')}`}>
                    <div className='trigger'>
                        <p>Close</p>
                        <div className='hamb'>
                            <div className='hamb-1'></div>
                            <div className='hamb-2'></div>
                            <div className='hamb-3'></div>
                        </div>
                    </div>
                </div>
                <div className="Navbar__menu-container">
                    <div className="nav-wrapper">
                        <div className="nav_menu">
                            <ul>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}>
                                    <a  href="https://carbonnew.vercel.app/">Home</a>
                                </li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="#">Manifest</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="#">Our Team</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="https://carbonstd.gitbook.io/governance" target="_blank">Our Carbon</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="https://carbonstd.gitbook.io/whitepaper/" target="_blank">Whitepaper</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="https://carbonstd.gitbook.io/governance" target="_blank">Roadmap</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="https://carbonstd.gitbook.io/governance" target="_blank">Governance</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="#">Whitelist</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="https://carbonstd.gitbook.io/governance/treasury-vault" target="_blank">Treasury Vault</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="#">DAO Plataform</a></li>
                                <li className={`menu-item ${setClass(defuse, 'animated')}`}><a href="#">Legal Documents</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}