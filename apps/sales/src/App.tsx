import {useReducer} from 'preact/hooks';
import { Suspense, lazy } from 'preact/compat';

import { Logo } from './logo';
import styles from './App.module.css';


import {CountView, Incrementer, Decrementer, ColorView} from '@spacely/inventoryviews'
import { InventoryContext, reducer } from '@spacely/inventory';

const ShoppingCart = () => {
  
  const [state,dispatch] = useReducer(reducer, {
    count:0,
    color:'#000'
  });

  return (
    <div>
      <InventoryContext.Provider value={{state, dispatch}}>
        <CountView />
        <CountView />
        <Decrementer /><Incrementer/>
        <br />
        <ColorView />
      </InventoryContext.Provider>
    </div>
  )
}

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
        <h1> Shopping Cart</h1>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
