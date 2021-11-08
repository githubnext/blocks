import ReactMarkdown from 'react-markdown' 

export default function MarkdownViewer (props) {
  const { repo, owner, content } = props;
  console.log(props);

  return (
    <ReactMarkdown># Hello World {repo}</ReactMarkdown>
  );
}
