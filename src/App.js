
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar1';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Home from './components/Home';
import PhoneSignUp from './components/PhoneSignUp';
import Signup from './Pages/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Pages/ProtectedRoute';



function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <UserAuthContextProvider>
        <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
        <Route path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
        
        <Route path="/phonesignup" element={<PhoneSignUp/>}/>



        </Routes>
        </UserAuthContextProvider>
     </Router>
    </div>
  );
}

export default App;
