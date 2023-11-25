import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  fileName: string;
}

const Markdown = ({ fileName }: Props) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    const loadContent = async () => {
      const module = await import(`./../../assets/markdown/${fileName}.md`);
      fetch(module.default)
        .then(file => file.text())
        .then(text => setContent(text));
    }
    loadContent();
  }, [fileName]);

  return (
    <article className='markdown'>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default Markdown;
