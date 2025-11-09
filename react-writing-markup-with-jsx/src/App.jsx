import Profile from './assets/profile.jpg'
import './App.css'

export default function App() {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
        <img src={Profile} alt="Katherine Johnson" />
      </div>
      <p className="summary">
         You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i> of scientists!</b>
        
      </p>
    </div>
  );
}
