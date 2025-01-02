import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a href="https://electron-react-boilerplate.js.org/" target="_blank" rel="noreferrer">
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <button
          type="button"
          onClick={async () => {
            const result = await window.apiKeyStudy1.ipcStudy1('foo', 1);
            console.log(`App: result: ${result.value}`);

            // const current = window.electron.store.get('ipc-store-get', 'foo');
            // console.log(`App.tsx: ` + current);
            // window.electron.store.set('ipc-store-set', 'foo', current + 2);
            // const readBack = window.electron.store.get('ipc-store', 'foozzzzzzzzzz');
            // console.log(`App.tsx: ` + readBack);
            // console.log(window.electron.store.get('ipc-store', 'foo'));
          }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default function App() {
  // console.log(`App.tsx ============`)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
