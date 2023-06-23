import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import About from "./containar/About/About";
import Appointment from "./containar/Appointment/Appointment";
import Contact from "./containar/Contact/Contact";
import Departments from "./containar/Departments/Departments";
import Doctor from "./containar/Doctors/Doctor";
import Doctors from "./containar/Doctors/Doctors";
import VisitingDoctor from "./containar/Doctors/VisitingDoctor";
import Home from "./containar/Home/Home";
import { Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
        {/* <Route path='/doctor/:id' element={<Doctor/>} />
        <Route path="/doctor/Visiting_Doctor" element={<VisitingDoctor/>}/> */}
        <Route path="/doctor/">
            <Route path=":id"  element={<Doctor/>}/>
            <Route path="Visiting_Doctor"  element={<VisitingDoctor/>}/>

        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/Auth" element={<Auth/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
