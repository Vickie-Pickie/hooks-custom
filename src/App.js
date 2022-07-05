import './App.css';
import Fetch from './Fetch';

function App() {
  const url = 'http://localhost:7070/';
  return (
    <div className="App">
      <Fetch url={url} opts={'data'} />
      <Fetch url={url} opts={'loading'} />
      <Fetch url={url} opts={'error'} />
    </div>
  );
}

export default App;
