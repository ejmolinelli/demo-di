import {DeepSignal} from 'deepsignal'
import { Inventory } from '@spacely/inventory';

interface Props{
    store: DeepSignal<Inventory>
}

// This is a component that views the counts facet of an inventory state.
const CountView = ({store}:Props)=>{
    return <div>the count is: {store.count}</div>
};


export default CountView;