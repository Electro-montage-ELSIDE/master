import React, { useState } from 'react';
import './Header.css';

export function Header() {
    const [language, setLanguage] = useState('en');

    const content = {
        en: {
            home: 'HOME',
            company: 'Company',
            services: 'Services',
            projects: 'Projects',
            contact: 'Contact'
        },
        es: {
            home: 'INICIO',
            company: 'Empresa',
            services: 'Servicios',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        ka: { // Added Georgian translations
            home: 'მთავარი',
            company: 'კომპანია',
            services: 'მომსახურებები',
            projects: 'პროექტები',
            contact: 'კონტაქტი'
        }
    }

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => {
            switch (prevLanguage) {
                case 'en':
                    return 'es';
                case 'es':
                    return 'ka';
                case 'ka':
                    return 'en';
                default:
                    return 'en';
            }
        });
    }

    return (
        <header className='header'>
            <img src='./company_logo.png' alt='elside company logo' className='logo' />
            <div className="container">
                <div className="btn"><a href="one">{content[language].home}</a></div>
                <div className="btn"><a href="two">{content[language].company}</a></div>
                <div className="btn"><a href="three">{content[language].services}</a></div>
                <div className="btn"><a href="four">{content[language].projects}</a></div>
                <div className="btn"><a href="five">{content[language].contact}</a></div>
                <button onClick={toggleLanguage} className="language-btn">
                    {language === 'en' ? 'Español' : language === 'es' ? 'ქართული' : 'English'}
                </button>
            </div>
        </header>
    )
}
