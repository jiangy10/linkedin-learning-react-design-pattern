import logo from './logo.svg';
import './App.css';
import {SplitScreen} from "./SplitScreen";

const LeftComponent = () =>{
    return (<h1 style={{backgroundColor: "blue"}}>Left!</h1>);
}

const RightComponent = () =>{
    return (<p>Right!</p>)
}

function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={4} rightWeight={1}>
          <LeftComponent/>
          <RightComponent/>
      </SplitScreen>
    </div>
  );
}

export default App;
