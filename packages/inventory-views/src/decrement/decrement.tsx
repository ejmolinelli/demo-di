import { useInventory } from "@spacely/inventory";


// simple component to add 1 to the inventory count
const Decrementer = () => {
    const {decrementCount} = useInventory();
    return <button onClick={decrementCount}>-1</button>
}

export default Decrementer;