import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './components/Map';
import { Button } from './components/Button';






function App() {

  //const Button1foo = (subs:string) => {
  //  console.log(subs);
  //  
  //}
//
  //const Button2foo = (subs:string,age:number,address:string) => {
  //  console.log(subs,age,address);
  //  
  //}
//
  //const Button3foo = ()=>{
  //  console.log("im a stupid  button");
  //  
  //}
//

 //const topCars = [
 //   {manufacturer:'BMW', model:'m5cs'},
 //   {manufacturer:'Mercedes', model:'e63s'},
 //   {manufacturer:'Audi', model:'rs6'}
 // ]


 let [a ,setA] = useState(1)


const onClickHandler =() =>{
  setA(++a)
}
const onClickAgain =() =>{
  setA(0)
}

  return (
    <div className="App">
      {/* <Task cars={topCars} /> */}

    {/* <Button  name={'MyYoutubeChanel-1'} callBack={() => Button1foo("ib")}/>
    <Button  name={'MyYoutubeChanel-2'} callBack={() => Button2foo("im a Kirill",18,"live in Krasnodar")} />
    <Button  name={'MyYoutubeChanel-3'} callBack={Button3foo} /> */}
<h1>{a}</h1>
    <button onClick={onClickHandler} >number</button>
    <button onClick={onClickAgain} >0</button>

    </div>
  );
}

export default App;
