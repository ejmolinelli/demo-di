import { Inventory } from "@spacely/inventory"
import { DeepSignal } from "deepsignal"
import {useRef} from 'preact/hooks'

interface PickerProps{
    store: DeepSignal<Inventory>
}

const SprocketColorPicker = ({store}:PickerProps) => {
    const pickerEl = useRef();

    const registerColor = (e:InputEvent)=>{
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
    // @ts-ignore
    return <input ref={pickerEl} type="color" name="sprocket color" value={toSeven(store.color)} onChange={registerColor}/>
}

export default SprocketColorPicker;