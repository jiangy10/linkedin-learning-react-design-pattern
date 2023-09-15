import logo from './logo.svg';
import './App.css';
import {SplitScreen} from "./SplitScreen";

const leftComponent = () =>{
    return (<h1 style={{backgroundColor: "blue"}}>Left!</h1>);
}

const rightComponent = () =>{
    return (<p>Right!</p>)
}

function App() {
  return (
    <div className="App">
      <SplitScreen left ={leftComponent} right = {rightComponent}></SplitScreen>
    </div>
  );
}

export default App;
