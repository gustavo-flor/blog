import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import Anchor from '../Anchor'
import CodeBlock from '../CodeBlock'

import './style.css'

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => (
  <article className='markdown'>
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      rehypePlugins={[rehypeRaw]}
      components={{ 
        a: Anchor,
        code: CodeBlock
      }}
    >
      {content}
    </ReactMarkdown>
  </article>
)

export default Markdown
