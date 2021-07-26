import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <div className="App">
        Hello World!, This is a Heroku Test
      </div>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
