import { Trans, TransProps } from 'react-i18next'

import { defaultNamespace } from '@/locales'

interface TranslateProps extends Omit<TransProps<string>, 'ns'> {
  ns?: string;
}

const Translate = ({ ns = defaultNamespace, ...rest }: TranslateProps) => (
  <Trans
    ns={ns}
    {...rest}
  />
)

export default Translate
