import { People } from './utils/data.js';
import { GetImageUrl } from './utils/utils.js';
import './App.css';

export default function List() {
  const listItems = People.map(person =>
    <li className='list-item'
        key={person.id}>
      <img className='avatar'
        src={GetImageUrl(person)}
        alt={person.name}
      />
      <p className='list-item p'>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );



  
  return (
    <article className='scientists-container'>
      <h1 className='scientists-container h2'>Scientists</h1>
      <ul className='scientists-list'>{listItems}</ul>
    </article>
  );
}
