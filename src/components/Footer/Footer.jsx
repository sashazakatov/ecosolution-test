import Icon from "components/Icon";
import css from './Footer.module.css'
import logo from 'images/logo.png'
import Container from "components/Container";

const Footer = () => { 
    return (
        <footer className={css.footer}>
            <Container>
                <div className={ css.footer__nav }>
                    <img width={269} height={40} src={ logo } alt="logo" />
                    <a href="/" className={css.footer__link }>
                        <Icon width={24} height={24} id="arrow-up"/>    
                    </a>
                </div>
                <div className={ css.social_div }>
                    <a href="/"><Icon width={24} height={24} id="facebook" /></a>
                    <a href="/"><Icon width={24} height={24} id="instagram" /></a>    
                </div>
                <address className={ css.footer__contact }>
                    <ul>
                        <li className={ css.footer_item }><span className={ css.footer__text }>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span></li>
                        <li className={ css.footer_item }><a className={ css.footer__text } href="mailto:office@ecosolution.com">office@ecosolution.com</a></li>
                        <li className={ css.footer_item }><span className={ css.footer__text }>ecosolution &copy; 2023</span></li>
                    </ul>
                </address>
            </Container>
        </footer>
    );
}

export default Footer;