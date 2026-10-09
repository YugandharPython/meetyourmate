
import React from "react";
import './App.css';
import FirtstComp from "./propsContainer/FirtstComp";
import SecondComp from "./propsContainer/SecondComp";
import ThirdComp from "./propsContainer/ThirdComp";
import FourthComp from "./propsContainer/FourthComp";

const user1={name1:'Yuga',age1:15,gender1:'male',salary1:9999999}
const user2={name2:'Sathya',age2:45,gender2:'Female',salary2:8888888}
const user3={name3:'Ramana',age3:25,gender3:'male',salary3:7777777}
const user4={name4:'kalyan',age4:35,gender4:'Female',salary4:6666666}

function App() {
  return (
    <div className='container'>
      <FirtstComp fcData={user1}/>
      <SecondComp scData={user2}/>  
      <ThirdComp tcData={user3}/>
      <FourthComp frthcData={user4}/>
    </div>
  )
}

export default App;
