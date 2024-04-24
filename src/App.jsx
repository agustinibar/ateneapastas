import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import style from '../src/app.module.css';


function App() {


  return (
    <div className={style.app}>
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/home" Component={Home}/>
    </Routes>
    </div>
  )
}

export default App
