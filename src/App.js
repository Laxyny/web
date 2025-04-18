import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code> Bienvenue
        </p>
        <a
          className="App-link"
          href="https://github.com/Laxyny"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://laxyny.github.io/React/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testeur de Résilience API
        </a>
      </header>
    </div>
  );
}

export default App;
