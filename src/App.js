import React,{useState} from 'react';
import './index.css';
import data from './data';
import List from './List';

function App() {
  
  const [people,setPeople] = useState(data);
  return (
    <>
    <main>
      <section className='container'>
        <h3>{people.length} Birthday Todays</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear all</button>
        <button onClick={()=>setPeople(data)}>Cancel</button> //added a line code 
      </section>
    </main>
    </>

  );
}

export default App;
