import React, { useState } from 'react';
import Auth from "../user/components/Auth";
import Footer from "../user/components/Footer";
import Header from "../user/components/Header";
import NotFound from "../user/components/NotFound";
import Test from "../user/components/Test";
import About from "../user/containar/About/About";
import Appointment from "../user/containar/Appointment/Appointment";
import Contact from "../user/containar/Contact/Contact";
import Departments from "../user/containar/Departments/Departments";
import Doctor from "../user/containar/Doctors/Doctor";
import Doctors from "../user/containar/Doctors/Doctors";
import VisitingDoctor from "../user/containar/Doctors/VisitingDoctor";
import Home from "../user/containar/Home/Home";
import { Route, Routes } from 'react-router-dom';
import Medicines from '../user/containar/MEdicines/Medicines';
import Private from '../user/components/userRoutes/Private';
import Privateruotes from '../user/components/userRoutes/Privateruotes';
import Counter from '../user/containar/Counter';
import Cart from '../user/containar/Cart/Cart';
import Cart1 from '../user/containar/Cart/Cart1';
import Medicines1 from '../user/containar/MEdicines/Medicines1';
import Favorite from '../user/containar/MEdicines/Favorite';
import Refexm from '../user/containar/Refexm';

function UserRoute(props) {
    const [cartcount ,setcartcount] =useState(0)
    return (
        <>
            <Header   cartcount1={cartcount}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/appointment' element={<Appointment />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/departments' element={<Departments />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/doctor/:id' element={<Doctor />} />
                <Route path="/doctor/Visiting_Doctor" element={<VisitingDoctor />} />
                <Route path="/doctor/">
                    <Route path=":id" element={<Doctor />} />
                    <Route path="Visiting_Doctor" element={<VisitingDoctor />} />

                </Route>
                {/* <Route path="/medicine" element={<Medicines />} />
                 */}
                <Route path='*' element={<NotFound />} />
                <Route path="/Auth" element={<Auth />} />
                <Route path="/Auth" element={<Test />} />
                
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/cart1' element={<Cart1/>}/>
                <Route path='/Medicines1' element={<Medicines1 setcartcount={setcartcount}/>}/>
                <Route path='/Favorite' element={<Favorite/>}/>
                <Route path='/useRefEx' element={<Refexm/>}/>




                {/* <Route path="/routes" element={<Privateruotes />} >
                    <Route path="Private" element={<Private />} />
                </Route> */}
                <Route  element={<Privateruotes />} >
                    <Route path="medicine" element={<Medicines />} />
                </Route>

            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;