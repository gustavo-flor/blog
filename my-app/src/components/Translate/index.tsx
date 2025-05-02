import { JSX } from 'react'
import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import { defaultNamespace } from '@/locales'

interface Props {
  i18nKey: string;
  ns: string;
  values?: Record<string, string>;
  components?: Record<string, JSX.Element>;
}

const Translate = ({ i18nKey, ns = defaultNamespace, values = {}, components = {} }: Props) => {
  const { i18n } = useTranslation()
  return (
    <Trans
      i18n={i18n}
      ns={ns}
      i18nKey={i18nKey}
      values={values}
      components={components}
    />
  )
}

export default Translate
