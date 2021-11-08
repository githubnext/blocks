import ReactMarkdown from 'react-markdown' 

export default function MarkdownViewer (props) {
  const { repo, owner, content } = props;
  
  console.log('logging from userland viewer', props);
  
  const markdown = `# Hello World ${repo}`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
