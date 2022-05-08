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
import useService from './hooks/useService';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddItem from './Components/AddItem/AddItem';


function App() {
  const [services] = useService();
  return (
    <div className=''>
      {/* this is navbar part */}
      <Header></Header>
      {/* Home part */}
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

        <Route path='/manage-inventory' element={
          <RequreAuth>
            <ManageInventory></ManageInventory>
          </RequreAuth>
        }> </Route>
        <Route path='/product-add-form' element={
          <RequreAuth>
            <AddItem></AddItem>
          </RequreAuth>
        }> </Route>
        <Route path='/add-item' element={<AddItem></AddItem>}> </Route>

        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signup' element={<SingUp></SingUp>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      {/* this is footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
