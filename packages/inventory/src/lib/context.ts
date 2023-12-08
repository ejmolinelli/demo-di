import { createContext } from "preact";
import {Dispatch} from 'preact/compat'

import { Inventory } from "./inventory";
import { InventoryAction } from "./reducer";

export type InventoryContextType = {
  state: Inventory;
  dispatch: Dispatch<InventoryAction>;
};

// create context with a default value
export const InventoryContext = createContext<InventoryContextType>({
  state: { count: 0, color: "#000" },
  dispatch: () => {},
});
