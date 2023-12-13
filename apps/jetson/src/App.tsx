import { Logo } from './logo';
import styles from './App.module.css';

import { DeepSignal, useDeepSignal } from 'deepsignal';
import { Inventory } from '../../../packages/inventory/src/lib/inventory';
import SprocketComponent from './sprocket';
import SprocketColorPicker from './colorpicker/colorpicker';
import SimpleComponent from './simple';

function App() {
  const JetsonsStore = useDeepSignal<Inventory>({count:10, color:"#F0F"});
  
  return (
    <div class={styles.App}>
      <SprocketComponent store={JetsonsStore}/>

      < br />
      <SprocketColorPicker store={JetsonsStore} />

      < br/>
      <SimpleComponent store={JetsonsStore} />
    </div>
  );
}

export default App;
