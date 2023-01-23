import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './components/Map';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { InputButton } from './components/InputButton';




type FilterType='all' | 'Dollars' | 'RUBLS'

function App() {

  //   MAP
  //const topCars = [
 //   {manufacturer:'BMW', model:'m5cs'},
 //   {manufacturer:'Mercedes', model:'e63s'},
 //   {manufacturer:'Audi', model:'rs6'}
 // ]


 // BUTTON CALLBACK
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

 

//USE STATE
// let [a ,setA] = useState(1)
//
//
//const onClickHandler =() =>{
//  setA(++a)
//}
//const onClickAgain =() =>{
//  setA(0)
//}





//const [money, setMoney] = useState([
//  { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//  { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//  { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//  { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//  { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//  { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//  { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//  { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
//])            
//
//
//let currentMoney = money
//const [filter,setFilter] = useState<FilterType>("all")


//
//if(filter === "Dollars"){
//   currentMoney = money.filter(el => el.banknots === "Dollars")
// }
//  if(filter === "RUBLS"){
//  currentMoney = money.filter(el => el.banknots === "RUBLS")
// }
//
// 
//const onClickHandler =(nameButton: FilterType) =>{
//  setFilter(nameButton)
//



//INPUT
let [message , setMessage] =useState([
  {message : "message1"},
  {message : "message2"},
  {message : "message3"},
])

const addMessage = (title:string) => {
  let NewMessage = {message:title}
  setMessage([NewMessage,...message])
  
}

let[title,setTitle] =useState('')
console.log(title);

const callBackButtonHandler = () =>{
  addMessage(title)
  setTitle('')
}


  return (
    <div className="App">
      {/* <Task cars={topCars} /> */}

    {/* <Button  name={'MyYoutubeChanel-1'} callBack={() => Button1foo("ib")}/>
    <Button  name={'MyYoutubeChanel-2'} callBack={() => Button2foo("im a Kirill",18,"live in Krasnodar")} />
    <Button  name={'MyYoutubeChanel-3'} callBack={Button3foo} /> */}

    
   {/* <h1>{a}</h1>
   <button onClick={onClickHandler} >number</button>
   <button onClick={onClickAgain} >0</button> */}

 {/*   <ul>
    {currentMoney.map((el ,index) =>{
      return (
        <li key={index}>
          <span>{el.banknots}  </span>
          <span>{el.value}     </span>
          <span>{el.number}</span>
        </li>
      )
    })}

   </ul>
      <button onClick={() => onClickHandler('all')}>all</button>
      <button onClick={() => onClickHandler('RUBLS')}>ruble</button>
      <button onClick={() => onClickHandler('Dollars')}>dollar</button>
    </div>
  );
}
 */}


{/* <FullInput addMessage={addMessage} /> */}

<Input title={title} setTitle={setTitle} />
<InputButton name={'+'} callBack={callBackButtonHandler}/>

{message.map((el,index)=>{

 return <div key={index}>{el.message}</div>
  
})}











</div>)}

export default App;
