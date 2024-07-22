import React from 'react';
import ReactDOM from 'react-dom/client';
import FontEditor from './FontEditor';

function App() {
  return (
    <div>
      <h1>Fond editor!</h1>
      <FontEditor
        text="Hello, World!"
        fontSize={24}
        fontColor="#333"
        fontFamily="Arial"
      />
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);