import {Inventory} from "@spacely/inventory"
import { useDeepSignal, DeepSignal } from 'deepsignal';


interface Props{
    store?: DeepSignal<Inventory>
}

const SprocketComponent = ({store}:Props)=>{
    const style = {backgroundColor:store?.color, margin:"1rem", padding: "2rem"};
    return (
        <div style={style} >
        <p>I am a totally different component, but living somewhere else, but I can be used in your app.</p>
        <p>George Jetson produced {store?.count} {store?.$color} sprockets in spaceley's factory. </p>
        </div>
    )
    
}

export default SprocketComponent;