import css from './Hero.module.css'
import Container from 'components/Container';
import Icon from 'components/Icon';

const Hero = () => {
    return (
        <section className={ css.hero }>
            <Container>
                <div className={ css.hero__fff }>
                    <h1 className={css.hero__title}>Renewable energy for any task</h1>
                    <div className={ css.hero__div }>
                        <p className={css.hero__text}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                        <div className={ css.header__learn_more }>
                            <a href="/" className={ css.learn_more__link }>
                                <span className={ css.learn_more__text }>Learn more</span>
                                <div className={css.learn_more__icon}>
                                    <Icon width={16} height={16} id="arrow-right" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;