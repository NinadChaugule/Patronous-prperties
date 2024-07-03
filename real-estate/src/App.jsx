import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/listing/:listingId' element={<Listing/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route element={<PrivateRoute/>}>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path= '/update-listing/:listingId' element={<UpdateListing/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
