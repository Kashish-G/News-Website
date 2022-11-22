import './App.css';
 import Login from './Login';
 import {useState} from "react";
  import Register from './Register';
import Test from './Test';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,  
  BrowserRouter
}   
from 'react-router-dom';  
import News from './News';

function App() {
   const [token,setToken]=useState(localStorage.getItem("userToken")??null);
  return (
    <main className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Register token={token} setToken={setToken}/> } />
       <Route path='login' element={<Login token={token} setToken={setToken} /> } />
       <Route path='NewsTimes' element ={ <Test /> } />
        
    </Routes>
    </BrowserRouter>
    {/* <News /> */}
    
    </main>
  );
}

export default App;
