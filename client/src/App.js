import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div id="navbar">cf</div>
      <Routes>
        <Route path='/Home' element={<Alltodos/>}/> 
      </Routes>
    </div>
  );
}

export default App;
