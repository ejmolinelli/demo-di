import { useInventory } from "@spacely/inventory";

const ColorView = () =>{
    const {color} = useInventory();
    
    const s = {color: color};
    return <div style={s}>sprocket color is {color}</div>
}

export default ColorView;