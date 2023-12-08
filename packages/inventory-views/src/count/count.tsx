import {useInventory } from '@spacely/inventory';


// This is a component that views the counts facet of an inventory state.
const CountView = ()=>{
    const {count} = useInventory();
    return <div>the count is: {count}</div>
};


export default CountView;