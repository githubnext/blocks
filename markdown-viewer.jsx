import ReactMarkdown from 'react-markdown' 

function Viewer (props) {
  const { meta, code } = props;
  const { name, path, sha, size } = meta;
  
  const markdown = `# Hello World ${name} ${path} ${sha} ${size}`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
