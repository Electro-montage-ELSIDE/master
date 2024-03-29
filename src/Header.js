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
            {/* <img src='./company_logo.png' alt='elside company logo' className='logo' /> */}
            <div alt='elside company logo' className='logo' />
                <a href='elside_logo' id='logo' aria-label='Link to go to the homepage'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="130.000000pt" height="120.000000pt" viewBox="0 0 300.000000 158.000000"
                    preserveAspectRatio="xMidYMid meet">
                <title>Elside Logo</title>
                <g transform="translate(0.000000,158.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                <path d="M766 1433 c-10 -60 -33 -187 -52 -283 -55 -282 -58 -243 30 -418 42
                    -83 76 -155 76 -160 0 -4 -36 -24 -81 -44 -44 -21 -78 -42 -75 -47 9 -14 76
                    -380 76 -413 0 -15 4 -29 9 -32 5 -3 12 52 16 122 l7 127 74 1 c82 2 153 29
                    212 83 l32 30 0 171 c0 199 -3 206 -96 266 -86 55 -104 115 -49 170 29 29 69
                    31 112 5 17 -11 33 -18 35 -16 1 2 2 53 0 114 l-3 111 -151 0 -151 0 5 160 c3
                    88 2 160 -1 160 -4 0 -15 -48 -25 -107z m164 -243 c136 0 135 1 128 -91 l-3
                    -44 -42 3 c-23 2 -51 -1 -62 -8 -25 -13 -71 -82 -71 -107 0 -35 36 -93 75
                    -118 22 -14 54 -37 70 -52 l30 -26 3 -161 c4 -149 2 -163 -16 -186 -36 -45
                    -105 -74 -212 -86 -30 -4 -61 -11 -68 -17 -7 -5 -15 -7 -18 -4 -10 10 -40 151
                    -36 170 2 9 25 27 50 38 62 28 82 47 82 78 0 14 -32 90 -71 169 l-71 143 11
                    67 c7 37 19 99 27 137 9 39 17 80 20 92 4 20 8 21 30 13 14 -6 79 -10 144 -10z" fill='orange'/>
                <path d="M462 1322 l3 -102 -157 0 -158 0 0 -470 0 -470 183 -1 182 0 65 -81
                    c83 -104 113 -137 107 -118 -3 8 -57 134 -121 278 l-114 264 56 -3 c34 -2 56
                    0 55 6 -2 6 -28 80 -58 165 -30 85 -54 159 -55 163 0 5 26 7 58 6 45 -2 56 1
                    54 12 -2 8 -24 110 -48 228 -24 118 -46 217 -50 220 -3 3 -4 -40 -2 -97z m38
                    -222 c11 -50 18 -95 15 -100 -3 -6 -16 -10 -29 -10 -35 0 -66 -32 -60 -61 7
                    -29 33 -118 41 -139 4 -8 7 -17 7 -20 1 -3 4 -10 8 -16 4 -6 11 -29 17 -52 9
                    -41 8 -42 -24 -58 -19 -8 -36 -23 -39 -31 -8 -21 38 -146 89 -244 8 -14 16
                    -37 19 -51 4 -24 3 -25 -19 -14 -14 8 -80 13 -172 15 -81 1 -151 6 -156 10 -4
                    4 -6 198 -5 432 l3 424 135 5 c74 3 138 4 142 2 3 -1 16 -43 28 -92z"/>
                <path d="M1162 568 l3 -153 130 0 130 0 3 153 3 152 -136 0 -136 0 3 -152z
                    m238 97 l0 -35 -55 0 c-30 0 -55 -4 -55 -10 0 -5 25 -10 55 -10 l55 0 0 -40 0
                    -40 -55 0 c-30 0 -55 -4 -55 -10 0 -5 25 -10 56 -10 l55 0 -3 -36 -3 -37 -100
                    0 -100 0 -3 132 -3 131 106 0 105 0 0 -35z"/>
                <path d="M1480 565 l0 -154 123 2 122 2 3 58 3 57 -46 0 -45 0 0 95 0 95 -80
                    0 -80 0 0 -155z m130 40 l0 -95 46 0 45 0 -3 -36 -3 -36 -93 -2 -92 -1 0 133
                    0 132 50 0 50 0 0 -95z"/>
                <path d="M1808 704 c-35 -18 -48 -43 -48 -90 0 -25 7 -46 22 -61 l21 -23 -21
                    0 c-20 0 -22 -5 -22 -59 l0 -60 108 3 c111 2 163 17 176 51 14 37 6 99 -16
                    122 -18 20 -19 23 -5 23 14 0 17 10 17 55 l0 55 -102 0 c-71 -1 -111 -5 -130
                    -16z m202 -43 l0 -39 -60 1 c-73 2 -81 -16 -9 -23 60 -7 79 -26 79 -81 0 -64
                    -21 -75 -152 -82 l-78 -4 0 39 0 38 70 0 c40 0 70 4 70 10 0 6 -16 10 -35 10
                    -42 0 -90 22 -99 45 -10 27 -7 70 7 87 23 29 52 37 130 38 l77 0 0 -39z" fill='orange'/>
                <path d="M2090 566 l0 -154 80 0 80 0 0 154 0 154 -80 0 -80 0 0 -154z m128 3
                    l-3 -132 -45 -1 -45 -1 -3 133 -3 132 51 0 51 0 -3 -131z" fill='orange'/>
                <path d="M2300 565 l0 -155 103 3 c162 4 203 39 195 168 -6 110 -48 139 -203
                    139 l-95 0 0 -155z m210 117 c43 -21 60 -53 60 -115 0 -52 -20 -101 -48 -116
                    -9 -5 -55 -11 -102 -12 l-85 -4 -3 133 -3 132 73 0 c50 0 84 -6 108 -18z" fill='orange'/>
                <path d="M2430 570 c0 -64 3 -80 15 -80 12 0 15 16 15 80 0 64 -3 80 -15 80
                    -12 0 -15 -16 -15 -80z" fill='orange'/>
                <path d="M2642 568 l3 -153 130 0 130 0 3 153 3 152 -136 0 -136 0 3 -152z
                    m238 97 l0 -35 -55 0 c-30 0 -55 -4 -55 -10 0 -5 25 -10 55 -10 l55 0 0 -40 0
                    -40 -55 0 c-30 0 -55 -4 -55 -10 0 -5 25 -10 56 -10 l55 0 -3 -36 -3 -37 -100
                    0 -100 0 -3 132 -3 131 106 0 105 0 0 -35z" fill='orange'/>
                </g>

                </svg>
            </a>
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
