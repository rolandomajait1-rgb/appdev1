import {rootGreet} from "./utils/RootModule.js";
import RootComponent from "./components/RootComponent.jsx";
import './index.css';

 function App() {
  rootGreet();
  RootComponent()
  return (
    <div>
      <RootComponent/>
      <rootGreet/>
    </div>
  );
}
export default App;











