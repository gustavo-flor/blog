import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import clojure from 'react-syntax-highlighter/dist/esm/languages/prism/clojure'
import groovy from 'react-syntax-highlighter/dist/esm/languages/prism/groovy'
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import kotlin from 'react-syntax-highlighter/dist/esm/languages/prism/kotlin'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('kotlin', kotlin)
SyntaxHighlighter.registerLanguage('groovy', groovy)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('clojure', clojure)
SyntaxHighlighter.alias('clojure', 'clj')

const CodeBlock = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
  const lang = /language-(\w+)/.exec(className || '')
  const content = children as string
  return lang ? (
    <SyntaxHighlighter 
      style={dracula} 
      language={lang[1]}
      PreTag='div' 
      useInlineStyles={true}
      className='syntax-highlighter'
      showLineNumbers={content.split('\n').length > 2}
      showInlineLineNumbers={false}
      wrapLines={false}
      lineProps={{}}
    >
      {content}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...rest}>{children}</code>
  )
}

export default CodeBlock
