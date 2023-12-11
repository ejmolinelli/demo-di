import {DeepSignal} from 'deepsignal'
import { Inventory } from '@spacely/inventory';

interface Props{
    store: DeepSignal<Inventory>
}


// simple component to add 1 to the inventory count
const Decrementer = ({store}:Props) => {
    const decrement = ()=> {
        store.count -= 1;
    }
    return <button onClick={decrement}>-1</button>
}

export default Decrementer;