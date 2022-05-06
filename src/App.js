import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import RequreAuth from './Components/RequreAuth/RequreAuth';
import Inventory from './Components/Inventory/Inventory';
import SingUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>

        <Route path='/inventory'
          element={
            <RequreAuth>
              <Inventory></Inventory>
            </RequreAuth>
          }></Route>

        <Route path='/inventory/:inventoryId'
          element={
            <RequreAuth>
              <Inventory></Inventory>
            </RequreAuth>
          }></Route>

        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signup' element={<SingUp></SingUp>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
