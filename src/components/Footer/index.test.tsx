import { render, screen } from '@testing-library/react'

import Footer from './'
 
describe('Footer', () => {
  it('renders a footer', () => {
    const year = new Date().getFullYear()

    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('w-full', 'bg-zinc-900', 'text-gray-200')
    expect(footer).toHaveTextContent(`gustavoflor.dev © ${year}.`)
    expect(footer).toHaveTextContent('Alguns direitos reservados.')
  })
})