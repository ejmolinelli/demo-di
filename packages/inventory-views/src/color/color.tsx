import {DeepSignal} from 'deepsignal'
import { Inventory } from '@spacely/inventory';

interface Props{
    store: DeepSignal<Inventory>
}


const ColorView = ({store}:Props) =>{    
    console.log("I only get rendered when store.color is changed")
    const s = {color: store.color};
    return <div style={s}>sprocket color is {store.color}</div>
}

export default ColorView;