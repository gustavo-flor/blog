import { getByText, render, screen } from '@testing-library/react'

import Brand from './'
 
describe('Brand', () => {
  it('renders a brand', () => {
    const className = 'some-class another-class'
    render(<Brand className={className} />)

    const span = screen.getByText('gustavoflor')
    expect(span).toBeInTheDocument()
    expect(span).toHaveClass('font-bold', 'text-gray-200', className)
    expect(span).toHaveTextContent('gustavoflor.dev')
    const small = getByText(span, '.dev')
    expect(small).toBeInTheDocument()
    expect(small).toHaveClass('text-purple-500')
  })
})