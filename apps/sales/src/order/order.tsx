import { Inventory } from "@spacely/inventory";
import { Decrementer, Incrementer } from "@spacely/inventoryviews";
import { DeepSignal } from "deepsignal";
import './order.scss';
import { useCallback, useState, useRef } from "preact/hooks";
import {render} from 'preact';

import SprocketColor from 'JetsonsApp/SprocketColor';

interface OrderProps{
    store: DeepSignal<Inventory>
}

const OrderCard = ({store}: OrderProps)=>{

    console.log("Order card rendering");

    const [eColor,setEColor] = useState(false);
    const widgetRef = useRef();

    const importColorPicker = useCallback(()=>{
        
        // import('http://localhost:3000/assets/remoteEntry.js').then(m=>{
        //     console.log(m.get("SprocketColor"));
        // })
        render(<SprocketColor store={store} />, widgetRef.current);
    },[])
    

    return <div class="order-card">
        You have {<span class="count-span">{store.count}</span>} sprockets in your cart.
        <br />
        <br />
        <Decrementer store={store}/><Incrementer store={store} />
        < br />
        < br/>
        {/* <p>At this time, you cannot change the color of your sprocket!</p> */}
        {!eColor && <button class="prompt-color" onClick={importColorPicker}>Click to Edit Color?</button>}
        <div ref={widgetRef}></div>
        < br />
    </div>
}


export default OrderCard;