import { DeepSignal, useDeepSignal } from 'deepsignal';
import { Inventory } from '@spacely/inventory';

interface Props{
    store?: DeepSignal<Inventory>
}


const ColorView = ({store}:Props) =>{  
    if (!store){
        store = useDeepSignal<Inventory>({count:-1, color:"#0F0"});
    }
    console.log("I only get rendered when store.color is changed")
    const s = {color: store.color};
    return <div style={s}>sprocket color is {store.color}</div>
}

export default ColorView;