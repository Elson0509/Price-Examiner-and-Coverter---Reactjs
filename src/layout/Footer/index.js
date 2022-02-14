import React from 'react'
import './Footer.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <div>
        <a
          target='_blank'
          rel="noopener noreferrer"
          href='https://play.google.com/store/apps/details?id=com.elsonramos.peuc'>
          <img src='/img/android.png' alt='android' width='350' />
        </a>
      </div>
      <div>
        <h4 className='title-footer'>Links</h4>
        <ul>
          <li>
            <a
              target='_blank'
              rel="noopener noreferrer"
              href='#'>
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