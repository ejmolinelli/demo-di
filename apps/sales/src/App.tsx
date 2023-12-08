import { Logo } from './logo';
import styles from './App.module.css';
import {DummyView} from '@spacely/inventoryviews'

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Logo class={styles.logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/preactjs/preact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
      <div>
        <h1> Custom content</h1>
        <DummyView />
      </div>
    </div>
  );
}

export default App;
