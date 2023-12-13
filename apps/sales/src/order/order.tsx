import { Inventory } from "@spacely/inventory";
import { Decrementer, Incrementer } from "@spacely/inventoryviews";
import { DeepSignal } from "deepsignal";
import './order.scss';
import { useRef, useState} from "preact/hooks";
import {render} from 'preact';

// import SprocketColor from 'JetsonsApp/SprocketColor';


interface OrderProps{
    store: DeepSignal<Inventory>
}

const OrderCard = ({store}: OrderProps)=>{

    console.log("Order card rendering");

    const [editColor,setEditColor] = useState(false);
    const placeholder = useRef();

    const style = {backgroundColor:store.color};

    const importColorPicker = ()=>{
        import("http://localhost:3000/assets/remoteEntry.js").then(m=>{
            m.get('./SprocketColor').then((f)=>{
                const SprocketColor = f();
                render(<SprocketColor store={store} />, placeholder.current);
                setEditColor(true);
            });
        });
    }

    return <div class="order-card" style={style}>
        You have {<span class="count-span">{store.count}</span>} sprockets in your cart.
        <br />
        <br />
        <Decrementer store={store}/><Incrementer store={store} />
        < br />
        < br/>
        {/* <p>At this time, you cannot change the color of your sprocket!</p> */}
        {!editColor && <button class="prompt-color" onClick={importColorPicker}>Click to Edit Color?</button>}
        <div ref={placeholder} style={{display:editColor}}>
        </div>
        < br />
    </div>
}


export default OrderCard;