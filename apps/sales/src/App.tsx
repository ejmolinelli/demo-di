import { Logo } from './logo';
import styles from './App.module.css';
import {useDeepSignal} from 'deepsignal'

import {CountView, Incrementer, Decrementer, ColorView} from '@spacely/inventoryviews'
import { Inventory } from '@spacely/inventory';


const ShoppingCart = () => {
  
  const MyInventory = useDeepSignal<Inventory>({count:0, color:"#F00"});

  return (
    <div>
      <CountView store={MyInventory}/>
      <CountView store={MyInventory} />
      <Decrementer store={MyInventory} /><Incrementer store={MyInventory}/>
      <br />
      <ColorView store={MyInventory} />

      <br />
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
function useDeepSignals<T>(arg0: { coun: any; }) {
  throw new Error('Function not implemented.');
}

