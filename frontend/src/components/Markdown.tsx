import { remark } from 'remark';
import { useEffect, useState } from 'react';
import html from 'remark-html';
import './markdownStyle.css';


async function markdownToHtml(markdown: any) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}


const Markdown = ({ children, className, onMouseUp }: any) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    markdownToHtml(children).then(setContent);
  }, []);

  return <div onMouseUp={onMouseUp} className={`prose text-slate-700 text-justify ${className}`} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Markdown;
