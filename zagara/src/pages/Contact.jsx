import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: '',
        surname: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the API call
        console.log("Form submitted:", formState);
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.subtitle')}</p>
                </motion.div>

                <div className="contact-content">
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <h2>{t('contact.success.title')}</h2>
                                <p>{t('contact.success.message')}</p>
                                <button
                                    className="reset-button"
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormState({ name: '', surname: '', email: '', company: '', subject: '', message: '' });
                                    }}
                                >
                                    {t('contact.success.button')}
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{t('contact.form.name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('contact.form.placeholders.name')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form.surname')}</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            value={formState.surname}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('contact.form.placeholders.surname')}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{t('contact.form.email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('contact.form.placeholders.email')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form.company')}</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            placeholder={t('contact.form.placeholders.company')}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>{t('contact.form.subject')}</label>
                                    <select
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>{t('contact.form.subjects.default')}</option>
                                        <option value="general">{t('contact.form.subjects.general')}</option>
                                        <option value="private_viewing">{t('contact.form.subjects.private')}</option>
                                        <option value="press">{t('contact.form.subjects.press')}</option>
                                        <option value="collaboration">{t('contact.form.subjects.collab')}</option>
                                        <option value="other">{t('contact.form.subjects.other')}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>{t('contact.form.message')}</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder={t('contact.form.placeholders.message')}
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-button">
                                    {t('contact.form.send')}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Contact;
