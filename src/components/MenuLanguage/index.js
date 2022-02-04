import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import Icon from '../Icon'
import './MenuLanguage.scss'

const MenuLanguage = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState(null)
    const dropdownRef = useRef(null)

    const { i18n } = useTranslation()

    const languages = [
        {
            language: 'en',
            label: 'English',
            icon: '/img/usa.jpg'
        },
        {
            language: 'pt-BR',
            label: 'Português',
            icon: '/img/brasil.jpg'
        },
        {
            language: 'es',
            label: 'Español',
            icon: '/img/spain.jpg'
        }
    ]

    const clickLanguageHandler = lang => {
        i18n.changeLanguage(lang)
        setShowMenu(false)
    }

    useEffect(() => {
        const pageClickEvent = e => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        if (showMenu) {
            window.addEventListener('click', pageClickEvent)
        }
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [showMenu])

    useEffect(() => {
        const language = languages.find(el => el.language === i18n.language)
        setCurrentLanguage(language)
    }, [i18n.language])

    return (
        <div className='MenuContainer'>
            <button onClick={() => setShowMenu(prev => !prev)} className='ButtonLanguage'>
                <img src={currentLanguage?.icon} height={30} alt='current language' />
                <div className='ArrowDown'>
                    <Icon icon='sort-down' size={'lg'} />
                </div>
            </button>
            {
                showMenu &&
                <nav className={`Menu ${showMenu ? 'Active' : ''}`} ref={dropdownRef}>
                    <ul>
                        {
                            languages.map(el => (
                                <li key={el.language}>
                                    <button className='LanguageOption' onClick={() => clickLanguageHandler(el.language)}>
                                        <span>
                                            <img src={el.icon} height={40} alt="language icon" />
                                        </span>
                                        <span>
                                            <p>{el.label}</p>
                                        </span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            }
        </div>
    );
};

export default MenuLanguage;