import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Delete from './delete';

function App() {
  const [inpValue, setInpValue] = useState('');
  const [Item, setItem] = useState([]);
  const addItem = () => {
    setItem((olditem) =>{
      return[...olditem,inpValue]
    }
    )
    setInpValue("")
  }
  const deleteAll =() =>{
    setItem(() =>{
      return[]
    }
    )
    setInpValue("")
}
  const deleteItems = (id)=>{
    console.log("deleted");
    setItem((olditem) =>{
      return olditem.filter((arrElement,index)=> {
        return index !== id;
      })
    })
}
  return (
    <>
    <div className="App">
      <div className="center-app">
        <h1 className="h1">TodoApp</h1>
      <input className="inp" onChange={(e)=>setInpValue(e.target.value)} value={inpValue} placeholder='Enter Value'/>
      <button className="btn" onClick={addItem}>Add</button>
      <button className="btn" onClick={deleteAll}>delete All</button>
      <ul>
        {Item.map( (e,index) =>{
         return( <Delete key={index} 
          id={index}
          Text ={e} 
          onselect={deleteItems}
          />)
          
        })
      }
    </ul>
    </div>
  </div>
  </>
  );
}

export default App;
