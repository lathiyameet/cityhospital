   import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";



import { Route, Router, Routes } from 'react-router-dom';
import Adminpage from "./admin/components/Adminpage";
import { Provider } from "react-redux";
import { configureStore } from "./reducx/store";



function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route element={<Adminpage />}>
          <Route path="/admin/*" element={<AdminRoute />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
