import React from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('./components/Editor'), {
  ssr: false,
});
// import Editor from './components/Editor';

export default function IndexPage() {
  return (
    <div>
      <Editor />
      {/* <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style> */}
    </div>
  );
}
