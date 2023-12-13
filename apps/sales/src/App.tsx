import styles from './App.module.css';
import { useDeepSignal, deepSignal } from 'deepsignal';
import {useRef} from 'preact/hooks'
import { Inventory } from '@spacely/inventory';
import OrderCard from './order/order';

import './shoppingcart.scss'


interface CartProps{
  items: Inventory[];
}

const ShoppingCart = (props:CartProps) => {
  const myRef = useRef();

  // wrap each inventory as a deep signal to make it reactive
  const items = useDeepSignal<Inventory[]>(props.items.map(i=>deepSignal(i)));


  // map each inventory state object to an order card
  return (
    <div class="shopping-cart">
      {items.map((i)=><OrderCard store={i} />)}
    </div>
  )
}


const shipment1: Array<Inventory> = [
  {
    count: 10,
    color: "#00F"
  },
  {
    count: 3,
    color: "#F00"
  },
  {
    count: 7,
    color: "#0F0"
  }
]



function App() {
  return (
    <div class={styles.App}>
      <div  class="cart-container cart-1">
        <h3> Items for shipment 1</h3>
        <ShoppingCart items={shipment1} />  
      </div>
    </div>
  );
}

export default App;
