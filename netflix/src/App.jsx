import Card from './Components/Card/Card';
import Header from './Components/Header/header';
import Home from './Components/Home/Home';
import './app.scss';
// import {BrowserRouter as Router, Routes,Route} from "react-router-dom";



function App() {

  return (
    <>
    <Header/>
    <Home/>
    {/* <Card/> */}
    {/* <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router> */}
    </>
  )
}

export default App
