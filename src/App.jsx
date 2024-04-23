import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";



function App() {


  return (
    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/home" Component={Home}/>
    </Routes>
  )
}

export default App
