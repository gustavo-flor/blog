import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement>) => {
  const lang = /language-(\w+)/.exec(className || '');
  console.log(`has lang = ${!!lang}`);
  console.log(rest);
  return lang ? (
    <SyntaxHighlighter 
      style={dracula} 
      language={lang[1]}
      PreTag="div" 
      useInlineStyles={true}
      className="syntax-highlighter"
      showLineNumbers={true}
      wrapLines={false}
      lineProps={{}}
    >
      {children as string}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...rest}>{children}</code>
  );
}

export default CodeBlock;
