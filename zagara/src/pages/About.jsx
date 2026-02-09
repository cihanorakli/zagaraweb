import { motion } from 'framer-motion';
import './About.css';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="about-page">
            <section className="about-hero">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="about-title"
                >
                    {t('about.hero.title')} <br />
                    <span className="italic-text">{t('about.hero.subtitle')}</span>
                </motion.h1>
            </section>

            <section className="history-section">
                <motion.div
                    className="text-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.p variants={fadeInUp}>{t('about.history.p1')}</motion.p>
                    <motion.p variants={fadeInUp}>{t('about.history.p2')}</motion.p>
                    <motion.p variants={fadeInUp}>{t('about.history.p3')}</motion.p>
                    <motion.p variants={fadeInUp}>{t('about.history.p4')}</motion.p>
                </motion.div>
            </section>

            <section className="mission-vision-section">
                <div className="mv-grid">
                    <motion.div
                        className="mv-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3>{t('about.mission.title')}</h3>
                        <p>{t('about.mission.text')}</p>
                    </motion.div>
                    <motion.div
                        className="mv-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3>{t('about.vision.title')}</h3>
                        <p>{t('about.vision.text')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="values-section">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    {t('about.values.title')}
                </motion.h2>
                <div className="values-grid">
                    {[1, 2, 3, 4].map((num) => (
                        <motion.div
                            key={num}
                            className="value-item"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h4>{t(`about.values.v${num}.title`)}</h4>
                            <p>{t(`about.values.v${num}.text`)}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
