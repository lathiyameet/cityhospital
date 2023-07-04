import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";



import { Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
      <Routes>
        <Route path="/*" element={<UserRoute/>}/>
        <Route path="/admin/*" element = {<AdminRoute/>} />
      </Routes>
  );
}

export default App;
