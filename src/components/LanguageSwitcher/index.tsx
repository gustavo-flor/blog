import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getSupportedLanguages } from './../../services/lang';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const supportedLanguages = getSupportedLanguages();
  const [selected, setSelected] = useState(i18n.language);

  const changeLanguage = (code: string) => {
    setSelected(code);
    i18n.changeLanguage(code);
  }

  useEffect(() => {
    setSelected(i18n.language);
  }, [i18n.language]);

  return (
    <select 
      value={selected}
      onChange={event => changeLanguage(event.target.value)}
      className='appearance-none bg-transparent outline-none text-xl py-1 px-1 md:px-4'
    >
      {supportedLanguages.map(lang => 
        <option key={lang.code} value={lang.code}>
          {lang.flag}
        </option>
      )}
    </select>
  );
}

export default LanguageSwitcher;