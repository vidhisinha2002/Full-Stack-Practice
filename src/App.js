import './App.css';               //we need to import img
import {useEffect,useState} from 'react';                     //import useState


function App() {
const [userInput1,setUserInput1]=useState({sst:0,hindi:0})   //destructure array
const [userInput2,setUserInput2]=useState({sst:0,hindi:0})   //destructure array

const clickme=()=>{
 if(userInput1.sst>userInput2.sst)
 {
   alert("1 wins in sst")
 }
 else{
   alert("2 wins in sst")
 }
 if(userInput1.hindi>userInput2.hindi)
 {
   alert("1 wins in sst")
 }
 else{
   alert("2 wins in sst")
 }
 }

 const handleSChange1 = (event) => {   
  const obj1={
    sst:event.target.value,
    hindi:userInput1.hindi
  }  
  setUserInput1(obj1) 
}

const handleSSChange1 = (event) => {   
  const obj1={
    
    sst:userInput1.sst,
    hindi:event.target.value
  }  
  setUserInput1(obj1)   
}

const handleSSSChange1 = (event) => {   
  const obj2={
    sst:event.target.value,
    hindi:userInput2.hindi
  }  
  setUserInput2(obj2) 
}

const handleSSSSChange1 = (event) => {   
  const obj2={
    
    sst:userInput2.sst,
    hindi:event.target.value
  }  
  setUserInput2(obj2)   
}


  return (
    <div className="App">
 <form>
    
    <input onChange={handleSChange1} value={userInput1.sst}></input><br></br>
    <input onChange={handleSSChange1}value={userInput1.hindi}></input><br></br>
    <input onChange={handleSSSChange1} value={userInput2.sst}></input><br></br>
    <input onChange={handleSSSSChange1}value={userInput2.hindi}></input><br></br>

    <button onClick={clickme}>
    Click me</button>
   
  </form> 


    </div>
   
  );
}

export default App;
//camel case
//{} instead of ""
//5ip-name usn colg age gender--