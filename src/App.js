import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let nayok = ['abir','mim','nahid'];
  let nayika = ['Srabonti','Porimony','Shabana'];
  var parson = {
    name: "Abir Hasan",
    id: 181002002
  };
  let Style = {
    color: 'red',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>

      <Users></Users>


        {
            nayok.map(nayok => <Person nayok = {nayok}></Person>)
            // nayika.map(nayika => <Person nayika = {nayika}></Person>)
        }
        
        <Person nayok="A" nayika = "Chaka khor"></Person>
        <Person nayok = "Manna" nayika = "Purnima"></Person>
        <Person nayok = "Eliyas Kancon" nayika = "Bobita"></Person> 
        
        <h1 style={Style}>Name: {parson.name}</h1>
        <h2 style={{
          color: 'cyan',
          fontSize: '35px'
        }}>ID: {parson.id}</h2>





      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(1000);
  const handleIncrase =() => {
   const newCount = count - 1;
   if(newCount <0 ){
     setCount(2000000);
   }else{
     setCount(newCount);
   }
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrase} style = {{padding:'10px',cursor:'pointer',fontSize:'20px'}}>Incress Count</button>
    </div>
  )
}

function Users(){
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  },[]) 
  return(
    <div>
      <h2>Dynamic Users: {user.length}</h2>
      <ol>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}









function Person(nayok) {
  let style = {
    border: '2px solid red', 
    margin: '3px'
  }
  return (<div style={style}>
    <h2>Nayok: {nayok.nayok}</h2>
  {/* <h3>Nayika: {nayika.nayika}</h3> */}
  </div>
  )
}
export default App;
