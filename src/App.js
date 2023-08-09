import Home from './routes/home.routes';
import {Routes, Route} from "react-router-dom";
import Navigation from './navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import './App.css';
const Shop = () =>{
  return( <h2>
     i am a shop page!
   </h2>)
 }
function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>

      </Route>
    </Routes>
  )
  
}

export default App;
