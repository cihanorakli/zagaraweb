import { motion } from 'framer-motion';
import heroImage from '../assets/look-red.jpg';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero-section">
            <div className="hero-image-container">
                <motion.img
                    src={heroImage}
                    alt="Zagara Architectural Gown"
                    className="hero-image"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            <div className="hero-content">
                <motion.h1
                    className="brand-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                >
                    {t('hero.title')} <br />
                    <span className="subtitle">{t('hero.subtitle')}</span>
                </motion.h1>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="scroll-text">{t('hero.scroll')}</span>
                    <div className="scroll-line"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
