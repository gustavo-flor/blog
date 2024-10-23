import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java'
import kotlin from 'react-syntax-highlighter/dist/esm/languages/prism/kotlin'
import groovy from 'react-syntax-highlighter/dist/esm/languages/prism/groovy'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'

SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('kotlin', kotlin)
SyntaxHighlighter.registerLanguage('groovy', groovy)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('bash', bash)

const CodeBlock = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
  const lang = /language-(\w+)/.exec(className || '');
  const content = children as string;
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
  );
}

export default CodeBlock;
