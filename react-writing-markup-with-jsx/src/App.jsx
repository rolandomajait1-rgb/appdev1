import Profile from './components/Profile';
import './App.css'

export default function App() {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
         <Profile/>
         <Profile/>
         <Profile/>
      <p className="summary">
         You can find thoughts of science here.
        <br /><br />
        <b>And <i>pictures</i> of scientists!</b>

      </p>
    </div>
  );
}
