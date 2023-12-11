import { useInventory } from "@spacely/inventory";

const ColorView = () =>{
    console.log("I get rendered whenever anythin in inventory gets changed :(.")
    const {color} = useInventory();
    
    const s = {color: color};
    return <div style={s}>sprocket color is {color}</div>
}

export default ColorView;