import css from './Header.module.css'
import Container from 'components/Container';
import log from 'images/logo.png'
import Icon from 'components/Icon';

const Header = () => { 
    return (
        <header className={css.header}>
            <Container>
                <nav className={ css.header__navigation }>
                    <a href="/">
                        <img width={269} height={40} src={log} alt="logo" className={ css.header__logo } />
                    </a>
                    <div className={ css.header__div }>
                        <button type='button' className={ css.burger__menu }>
                            <Icon width={16} height={16} id='menu' /> 
                        </button>
                        <a href="/" className={ css.header__touch }>
                            <span className={css.touch__text}>Get in touch</span>
                            <div className={css.touch__icon}>
                                <Icon width={14} height={14} id="arrow-up" />
                            </div>
                        </a>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;