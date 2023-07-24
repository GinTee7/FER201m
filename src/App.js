import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import Details from "./component/Details";
import './App.css'
import Dashboard from "./component/Dashboard";
import AddNews from "./component/AddNews";
import UpdateNews from "./component/UpdateNews";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/add' element={<AddNews/>} />
        <Route path='/news/:id/edit' element={<UpdateNews/>} />
      </Routes>
    </div>
  );
}

export default App;
