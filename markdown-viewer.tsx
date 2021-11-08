import ReactMarkdown from 'react-markdown' 

const dependencies = {'react-markdown': 'latest'};

interface ViewerProps {
  meta: any;
  code: string;
}

function Viewer (props: ViewerProps) {
  console.log('received', props);
  const { meta, code } = props;
  const { name, path, sha, size } = meta;
  
  const markdown = `# Hello World ${name} ${path} ${sha} ${size}`;

  return (
    <ReactMarkdown children={markdown}></ReactMarkdown>
  );
}
