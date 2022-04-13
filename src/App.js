import './App.css';               //we need to import img
import {useEffect,useState} from 'react';                     //import useState


function App() {
const [userInput1,setUserInput1]=useState({name:"",usn:"",univ:"",gen:"",age:""})   //destructure array
const [showVal,setShowVal]=useState(false)
const fn=()=>{
  if(showVal==true)
    <h1></h1>
  else
    showVal=true

}
 const handleNameChange1 = (event) => {   
  const obj1={
    name:event.target.value,
    usn:userInput1.usn,
    univ:userInput1.univ,
    gen:userInput1.gen,
    age:userInput1.age
  }  
  setUserInput1(obj1) 
}
const handleUSNChange1 = (event) => {   
  const obj1={
    name:userInput1.name,
    usn:event.target.value,
    univ:userInput1.univ,
    gen:userInput1.gen,
    age:userInput1.age
  }   
  setUserInput1(obj1)  
}
const handleUNIVChange1 = (event) => {   
  const obj1={
    name:userInput1.name,
    usn:userInput1.usn,
    univ:event.target.value,
    gen:userInput1.gen,
    age:userInput1.age
  }  
  setUserInput1(obj1)   
}
const handleGENChange1 = (event) => {   
  const obj1={
    name:userInput1.name,
    usn:userInput1.usn,
    univ:userInput1.univ,
    gen:event.target.value,
    age:userInput1.age
  }  
  setUserInput1(obj1)   
}
const handleAGEChange1 = (event) => {   
  const obj1={
    name:userInput1.name,
    usn:userInput1.usn,
    univ:userInput1.univ,
    gen:userInput1.gen,
    age:event.target.value
  }  
  setUserInput1(obj1)   
}




  return (
    <div className="App">
 <form>
    
    <input id="name"onChange={handleNameChange1} value={userInput1.name}></input><br></br>
    <input id="usn"onChange={handleUSNChange1}value={userInput1.usn}></input><br></br>
    <input id="usn"onChange={handleUNIVChange1}value={userInput1.univ}></input><br></br>
    <input id="usn"onChange={handleGENChange1}value={userInput1.gen}></input><br></br>
    <input id="usn"onChange={handleAGEChange1}value={userInput1.age}></input><br></br>
    <button onClick={fn()}></button>
  </form> 


    </div>
   
  );
}

export default App;
//camel case
//{} instead of ""
//5ip-name usn colg age gender--