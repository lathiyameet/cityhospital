import React from 'react';
import Dropdown from "../admin/components/Dropdown";
import Adminpage from "../admin/components/Adminpage";
import { Route, Routes } from 'react-router-dom';
import Appointmentadmin from '../admin/containar/Appointmentadmin';

import Departmentsadmin from '../admin/containar/Departmentsadmin';
import Medicines from '../admin/containar/Medicines/Medicines';
import Doctorsadmin from '../admin/containar/Doctor/Doctorsadmin';

function AdminRoute(props) {
    return (
        <div>
            <Dropdown>
                <Routes>
                  
                        <Route path='/appointment' element={<Appointmentadmin />} />
                        <Route path='/doctor' element={<Doctorsadmin/>} />
                        <Route path='/department' element={<Departmentsadmin />} />
                        <Route path='/medicines' element={<Medicines />} />
                   
                </Routes>
            </Dropdown>
        </div>
    );
}

export default AdminRoute;