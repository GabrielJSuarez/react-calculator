import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div>
      <div className="App">
        Hello World!, This is a Heroku Test
      </div>
      <Display />
      <ButtonPanel />
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

export default App;
