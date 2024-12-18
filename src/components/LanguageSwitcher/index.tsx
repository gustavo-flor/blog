import { useTranslation } from "react-i18next";
import { getSupportedLanguages } from "../../services/lang";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const supportedLangs = getSupportedLanguages()
  const changeLanguage = (code: string) => i18n.changeLanguage(code)

  return (
    <div>
      {supportedLangs.map(lang => 
        <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
          {lang.flag}
        </button>
      )}
    </div>
  )
}

export default LanguageSwitcher;