import { rootGreet } from "./utils/RootModule.js";
import RootComponent from "./components/RootComponent.jsx";
import './index.css';
export default function App() {
  rootGreet();
  RootComponent()
  return (
    <div>
      <RootComponent/>
      <rootGreet/>
    </div>
  );
}











