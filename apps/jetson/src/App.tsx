import { Logo } from './logo';
import styles from './App.module.css';
import SprocketComponent from './sprocket';
import { DeepSignal, useDeepSignal } from 'deepsignal';
import { Inventory } from '../../../packages/inventory/src/lib/inventory';

function App() {
  const JetsonsStore = useDeepSignal<Inventory>({count:10, color:"#F0F"});
  
  return (
    <div class={styles.App}>
      <SprocketComponent store={JetsonsStore}/>
    </div>
  );
}

export default App;
