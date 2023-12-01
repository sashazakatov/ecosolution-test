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
                        <img src={log} alt="logo" className={css.logo} />
                    </a>
                    <button type='button' className={ css.burger__menu }>
                    <Icon width={16} height={16} id='menu' /> 
                    </button>
                </nav>
            </Container>
        </header>
    );
}

export default Header;