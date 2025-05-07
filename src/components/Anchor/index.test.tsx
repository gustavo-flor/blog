import { render, screen } from '@testing-library/react'

import Anchor from './'
 
describe('Anchor', () => {
  it('renders an anchor with attributes', () => {
    const value = 'GitHub'
    const props: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      href: 'https://www.github.com',
      download: 'site.html',
      type: 'text/html'
    }

    render(<Anchor {...props}>{value}</Anchor>)

    const anchor = screen.getByRole('link', { name: value })
    expect(anchor).toBeInTheDocument()
    expect(anchor.getAttribute('rel')).toBe('noreferrer')
    expect(anchor.getAttribute('target')).toBe('_blank')
    Object.entries(props).forEach(([key, value]) => {
      expect(anchor.getAttribute(key)).toBe(value)
    })
  })
})