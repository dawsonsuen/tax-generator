import './App.css';
import Result from './views/Result';

import { Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result country={'fdsdfsfsd'} year={''} taxIncome={''} />} />
      </Routes> */}
    </div>
  );
}

export default App;
