import ReactMarkdown from 'react-markdown' 

function Viewer (props) {
  const { content, meta } = props;
  console.log('userland', props);
  
  const markdown = `# Hello World`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
