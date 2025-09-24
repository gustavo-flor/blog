import { render, screen } from '@testing-library/react'

import { I18nProvider } from '@/providers/I18n'
import { defaultLanguage } from '@/services/lang'

import Footer from './'

describe('Footer', () => {
  it('renders a footer', () => {
    const year = new Date().getFullYear()
    const copyright = 'Alguns direitos reservados'
    const lang = 'pt-BR'
    const resource = {
      footer: { copyright }
    }
    const mockOptions = {
      lng: lang,
      resources: {
        [lang]: resource
      }
    }

    render(
      <I18nProvider options={mockOptions} language={defaultLanguage}>
        <Footer />
      </I18nProvider>
    )

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('w-full', 'bg-zinc-900', 'text-gray-200')
    expect(footer).toHaveTextContent(`gustavoflor.dev © ${year}.`)
    expect(footer).toHaveTextContent(copyright)
  })
})