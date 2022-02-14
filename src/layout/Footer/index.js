import React from 'react'
import './Footer.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <div className='div-footer'>
        <a
          target='_blank'
          rel="noopener noreferrer"
          href='https://play.google.com/store/apps/details?id=com.elsonramos.peuc'>
          <img src='/img/android.png' alt='android'/>
        </a>
      </div>
      <div className='div-footer'>
        <h4 className='title-footer'>Links</h4>
        <ul>
          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href='https://github.com/Elson0509/Price-Examiner-and-Coverter---Reactjs'>
                {t('label.sourceCode')}
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href='https://www.linkedin.com/in/elson-ramos-519729ab/'>
                {t('label.profile')}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;