import './App.css';
import Example from './components/Example';
import Rand from './components/Rand';
import User from './components/User';
import Style from './myStyle.module.css'

function App() {
 const subject ='React'
 const username ="Maxwell"

 const show =()=>{
  alert('button clicked')
 }
 const add =(user)=>{
  alert(`${user} is added`)
 }
 const changeValue=(e)=>{
  console.log(e.target.value);

 }
  return (
    <>
         <h1 style={{textAlign:"center",color:"red"}}>welcome react</h1> 
        

    <div className="App">
     <h1>i am christeena</h1>
     <h3>subject is :<span className={Style.reactsubject}>{subject}</span></h3>
     <button onClick={show} type='button' style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px'}}>click</button>
         <button onClick={()=>add('jennifer')} type='button' style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px'}}>add</button>

     <div>
      <input onChange={(e)=>changeValue(e)} type='text' placeholder='enter the username' style={{width:'400px',padding:'10px',margin:'10px',borderRadius:'10px'}}/>
     </div>
     <ul>
      <li><Example subject={subject}/></li>
      <li><Rand/></li>
      <li><User uname={username} age='30'/></li>
     
     </ul>
    </div>
 </>
  );
}

export default App;
