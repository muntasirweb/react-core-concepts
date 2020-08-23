import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Mahfuzur Rahman",
    job: "singer"
  };
  var person2 = {
    name: "Eva Rahman",
    job: "good singer"
  };
  const products=[
    {name: "Photoshop", price: "$99.99"},
    {name: "Illustrator", price: "$69.99"},
    {name: "Lightroom", price: "$59.99"}
  ];
  var nayoks = ["Joshim", "Alamgir", "Razzak"];
  var style = {
    color: 'yellow',
    backgroundColor: 'cyan'
  }
  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style ={style}>My Heading: {person.name + " " + person.job}</h1>
        <h3 style= {{backgroundColor: "seagreen"}}>My Heading: {person2.name + " " + person2.job}</h3>
      </header>
      <p>I am react person</p>
      <Users></Users>
      <Count></Count>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        <li>{nayoks[1]}</li>
      </ul>
      {
        products.map(product => <Product product={product}></Product>)
      }
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Person name="shakib khan" nayika="Shabnur"></Person>
      <Person name="Amin Khan" nayika="jesi"></Person>
      <Person name="Jumman Khan" nayika="Jhumka"></Person>
      <Person name="Kuddus Khan" nayika="Kuberi"></Person>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  //console.log(users);
  return(
    <div>
      <h3>Dynamic Users: </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>      
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(15);
  const increaseValue = () => {
    const newCount = count+1;
    setCount(newCount);
  }
  return(
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  <button onClick={()=>setCount(count+1)}>Increase</button>
  </div>
  )
}

function Product(props){
  const productSyle ={
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    border: "1px solid gray",
    borderRadius: '5px',
    margin: '5px',
    float: 'left'
    
  }
  //console.log(props);
  const {name, price} = props.product;
  return(
    <section style={productSyle}>
      <h4>{name}</h4>
      <p>{price}</p>
      <button>Buy now!</button>
    </section>
  );
}
function Person(props){
  var style = {
    backgroundColor: 'lightsalmon',
    border: '1px solid black',
    margin: '10px',
    float: 'left'
  }
  return (
    <div style = {style}>
      <h3>Name: {props.name}</h3>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

export default App;
