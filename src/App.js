import logo from './logo.svg';
import './App.css';
//------------------------Step 1: Import hook (hook is like a plugin)
import { useState } from 'react';//used { } because we are importing a specific part from react as oppsed to when we import component or models in which the first part would only be a variable name we give it
//components
import Card from './components/Card' //components when created, react elements when used
import Button from './components/Button'
//data
import symbols from './models/symbols'
import cardImages from './models/cardImages'
// const state = {
  //we did not explicitly create state for models because JSX automatically assume it is a state when called, but it is good practice to create the state
// }
//-----------------------Step 2: Import data and components
function App() {
  //1. Destructure our state
  //const [variable, setVariable] the second parameter is always set'FirstParameter' in camelCase
  //-----------------------Step 3: Establish what variable in state
  const [count, setCount] = useState(0) //count start at 0
  // const [currentPic, setCurrentPic] = useState(cardImages[count])

//Functions above return statement
//-----------------------Step 4: Create functions that can be passed as props, that will use the useState hook and change the data in state
const changeCount = () => {//right arrow button
  console.log(count)
  setCount(count+1)
}
const reverseCount = () => {//left arrow button
  console.log(count)
  setCount(count-1)
}
//pass these functions into components as props
  return (
    <div className="App">
      {/* <Button /> is a react element*/}
      {/* count and cardImages[count] are being passed as props */}
      <Card currentCount = {count} images = {cardImages[count]}/>
      <Button changePic = {reverseCount} symbols = {symbols.left}/>
      <Button changePic = {changeCount} symbols = {symbols.right}/>
    </div>
  );
}
// created an react app, made two folders, put data in the models, in app js we called the components and data. We established the useStates
//main point is to change useState when data is accessed
//useEffect is to load the functions before the app happens
export default App;
