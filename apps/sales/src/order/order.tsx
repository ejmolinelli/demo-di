import { Inventory } from "@spacely/inventory";
import { Decrementer, Incrementer } from "@spacely/inventoryviews";
import { DeepSignal } from "deepsignal";
import './order.scss';
import { useState} from "preact/hooks";

import SprocketColor from 'JetsonsApp/SprocketColor';


interface OrderProps{
    store: DeepSignal<Inventory>
}

const OrderCard = ({store}: OrderProps)=>{

    console.log("Order card rendering");

    const style = {backgroundColor:store.color};

    return <div class="order-card" style={style}>
        You have {<span class="count-span">{store.count}</span>} sprockets in your cart.
        <br />
        <br />
        <Decrementer store={store}/><Incrementer store={store} />
        < br />
        < br/>
        {/* <p>At this time, you cannot change the color of your sprocket!</p> */}
        {/* {!eColor && <button class="prompt-color" onClick={importColorPicker}>Click to Edit Color?</button>} */}
        <SprocketColor store={store} />
        < br />
    </div>
}


export default OrderCard;