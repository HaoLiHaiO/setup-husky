import logo from '../src/logo.svg';

export const MockComponent = () => (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is just a mock component.
      </p>
      <a
        className="App-link"
        href="https://typicode.github.io/husky/#/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Set up husky
      </a>
    </header>
  </div>
)