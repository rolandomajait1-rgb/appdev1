import Profile from './Components/Profile.jsx'
import { Artist, Artwork } from './Components/Gallery.jsx'
import './App.css'

export default function App() {
  return (
 <section>
      <h1>Amazing Scientists!</h1>
      <Profile  />
      <Profile  />
      <Profile  />
      <hr />
      <h2>Section: Named Exports/Imports</h2>
      <Artist />
      <Artwork />
    </section>
  );
}


