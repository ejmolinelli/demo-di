import { Inventory } from "./inventory";
import {BASIC_ACTION, PARAM_ACTION} from './actions';

export type InventoryAction = |BASIC_ACTION|PARAM_ACTION;

// reducer fucntion to update state with typed actions
export const reducer = (state:Inventory, action: InventoryAction):Inventory =>{
    switch (action.type) {
        case "increment": {
          return { ...state, count: state.count + 1 };
          break;
        }
        case "decrement": {
          return { ...state, count: Math.max(0, state.count - 1) };
          break;
        }
        case "set_color": {

          return {
            ...state,
            color: action.payload.startsWith("#") ? action.payload : state.color,
          };
          break;
        }
        default:
          throw Error(`Action "${action.type}" not recognized`);
      }
}