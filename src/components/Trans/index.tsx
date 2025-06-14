'use client'

import React, { ReactNode, ReactElement } from 'react'
import { useI18n } from '@/providers/I18n'

interface TransProps {
  i18nKey: string
  ns?: string
  values?: Record<string, string | number>
  components?: Record<string, ReactElement>
  children?: ReactNode
}

const processComponents = (text: string, components?: Record<string, ReactElement>): ReactNode => {
  if (!components || Object.keys(components).length === 0) return text

  const componentNames = Object.keys(components)
  const regex = new RegExp(`<(${componentNames.join('|')})>(.*?)<\/\\1>`, 'g')
  
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, componentName, content] = match
    
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    
    const Component = components[componentName]
    if (Component) {
      parts.push(
        React.cloneElement(Component, { key: key++ }, content)
      )
    } else {
      parts.push(content)
    }
    
    lastIndex = match.index + fullMatch.length
  }
  
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  
  return parts.length > 1 ? <>{parts}</> : parts[0] || text
}

const Trans = ({ i18nKey, ns = 'common', values, components }: TransProps) => {
  const { t } = useI18n()
  
  const translation = t(i18nKey, { ns, values })
  
  const result = processComponents(translation, components)
  
  return <>{result}</>
}

export default Trans 