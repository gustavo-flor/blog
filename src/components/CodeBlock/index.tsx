import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
