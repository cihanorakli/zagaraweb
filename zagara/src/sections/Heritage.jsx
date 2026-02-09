import { motion } from 'framer-motion';
import fabricImage from '../assets/look-black.jpg';
import textureImage from '../assets/texture.png';
import './Heritage.css';
import { useLanguage } from '../context/LanguageContext';

const Heritage = () => {
    const { t } = useLanguage();

    return (
        <section className="heritage-section">
            <div className="background-texture" style={{ backgroundImage: `url(${textureImage})` }}></div>

            <div className="heritage-container">
                <motion.div
                    className="text-block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="heritage-title">{t('home.heritage.title')}</h2>
                    <p className="heritage-body">
                        {t('home.heritage.p1')}
                        <br />
                        {t('home.heritage.p2')}
                    </p>
                    <div className="heritage-meta">
                        <span>{t('home.heritage.est')}</span>
                        <span>{t('home.heritage.location')}</span>
                    </div>
                </motion.div>

                <motion.div
                    className="image-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img src={fabricImage} alt="Macro detail of hand-woven textile" className="fabric-macro" />
                    <span className="caption">{t('home.heritage.caption')}</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Heritage;
