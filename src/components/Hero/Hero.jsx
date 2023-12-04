import css from './Hero.module.css'
import Container from 'components/Container';
import Icon from 'components/Icon';

const Hero = () => {
    return (
        <section className={ css.hero }>
            <Container>
                <h1 className={css.hero__title}>Renewable energy for any task</h1>
                <p className={css.hero__text}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                <a href="/" className={ css.header__learn_more }>
                    <span className={ css.learn_more__text }>Learn more</span>
                    <div className={css.learn_more__icon}>
                        <Icon width={16} height={16} id="arrow-up" />
                    </div>
                </a>
            </Container>
        </section>
    );
}

export default Hero;