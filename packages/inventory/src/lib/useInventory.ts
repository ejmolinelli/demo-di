import {useCallback, useContext} from 'preact/hooks';
import {InventoryContext}  from './context'


// EXPECTS to be used downstream of a context PROVIDER
export const useInventory = () => {
    const context = useContext(InventoryContext);
  
    // dispatcher
    const dispatcher = context.dispatch;
  
    // memoize callbacks so they don't get rebuild on rerenders
    const incrementCount = useCallback(() => {
      dispatcher({ type: "increment" });
    }, [dispatcher]);
  
    const decrementCount = useCallback(() => {
      dispatcher({ type: "decrement" });
    }, [dispatcher]);
  
    const changeColor = useCallback(
      (color: string) => {
        dispatcher({
          type: "set_color",
          payload: color
        });
      },
      [dispatcher]
    );
  
    // return store and actions
    return {
      count: context.state.count,
      color: context.state.color,
      incrementCount,
      decrementCount,
      changeColor
    };
  };
  