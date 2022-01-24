import { useTranslation, Trans } from 'react-i18next'
import Icon from './components/Icon';
import { menuOptionsPrices } from './services/menuOptions'

const lngs = {
  "pt-BR": { nativeName: 'Português' },
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h2>Hello world!</h2>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
        <br />
        {t('description.part2')}
        <br />
        {t('speed.meterpersecond')}
      </p>
      <div>
        {
          menuOptionsPrices.map(el=>(
            <div key={el.screen}>
              <Icon icon={el.icon}/>
              <p>{t(el.title)}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
