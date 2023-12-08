import { useInventory } from "@spacely/inventory";


// simple component to add 1 to the inventory count
const Incrementer = () => {
    const {incrementCount} = useInventory();
    return <button onClick={incrementCount}>+1</button>
}

export default Incrementer;