import ReactMarkdown from 'react-markdown' 

function Viewer (props) {
  const { content, meta } = props;
  const { owner, repo } = meta;
  console.log('userland', props, meta);
  
  const markdown = `# Hello World`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
