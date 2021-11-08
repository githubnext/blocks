import ReactMarkdown from 'react-markdown' 

function Viewer (props) {
  const { content, meta } = props;
  const { owner, repo } = meta;
  
  const markdown = `# Hello World ${owner}x ${repo}`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
