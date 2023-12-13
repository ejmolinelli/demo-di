import {Inventory} from "@spacely/inventory"
import { useDeepSignal, DeepSignal } from 'deepsignal';


interface Props{
    store?: DeepSignal<Inventory>
}

const SprocketComponent = ({store}:Props)=>{
    const style = {backgroundColor:store?.color, margin:"1rem", padding: "2rem"};


    const registerColor = (e:InputEvent)=>{
        console.log("REGISTERING COLOR");
        if (!e || !e.target){
            return;
        }
        // @ts-ignore
        store.color = e.target.value;
    }

    const toSeven = (value:string) => {
        if (value.length < 7){
            return `#${value.split('').slice(1).map(char => char + "0").join('')}`
        } else {
            return value;
        }
    }


    return (
        <div style={style} >
        <p>count is {store?.count} and color {store?.color} </p>
        {/* @ts-ignore */}
        <input type="color" name="sprocket color" value={toSeven(store?.color)} onChange={registerColor}/>
        </div>
    )
    
}

export default SprocketComponent;