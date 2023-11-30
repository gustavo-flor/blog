import ReactMarkdown from 'react-markdown';

import Anchor from '../Anchor';
import CodeBlock from '../CodeBlock';

import './style.css';

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => (
  <article className='markdown'>
    <ReactMarkdown components={{ 
      a: Anchor,
      code: CodeBlock
    }}>
      {content}
    </ReactMarkdown>
  </article>
);

export default Markdown;
