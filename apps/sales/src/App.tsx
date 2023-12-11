import styles from './App.module.css';
import {useDeepSignal} from 'deepsignal'
import {useEffect, useRef} from 'preact/hooks'
import {render} from 'preact'
import {CountView, Decrementer, ColorView} from '@spacely/inventoryviews'
import { Inventory } from '@spacely/inventory';


const ShoppingCart = () => {
  const myRef = useRef();
  const MyInventory = useDeepSignal<Inventory>({count:0, color:"#F00"});
  const state = {store:MyInventory};

  useEffect(()=>{
    setTimeout(() => {
      import('./wrapper').then((module)=>{
        const Inc = module.default;
        render(<Inc {...state} />, myRef.current);
      });
    }, 1500);
  },[]);

  return (
    <div>
      <CountView {...state}/>
      <CountView {...state} />
      <Decrementer {...state} />

      <div ref={myRef}></div>
      
      <br />
      <ColorView {...state} />
      <br />
    </div>
  )
}

function App() {
  return (
    <div class={styles.App}>
      <p>This application can display the results of one or  more inventory stores of "sprockets". Sprocket stores track only the number and color of sprockets. </p>
      <div>
        <h1> This is one shopping cart</h1>
        <ShoppingCart />
      </div>
      <br />
      <div>
        <h1> This is a different shopping cart</h1>
        <ShoppingCart />
      </div>
      
    </div>
  );
}

export default App;
