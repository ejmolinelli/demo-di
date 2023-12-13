import {DeepSignal} from 'deepsignal'
import { Inventory } from '@spacely/inventory';

interface Props{
    store: DeepSignal<Inventory>
}



// simple component to add 1 to the inventory count
const Incrementer = ({store}:Props) => {
    const increment = () => {
        store.count += 1;
    }
    return <button onClick={increment}>+1</button>
}

export default Incrementer;