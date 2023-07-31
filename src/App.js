import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";



import { Route, Router, Routes } from 'react-router-dom';
import Adminpage from "./admin/components/Adminpage";
import { Provider } from "react-redux";
import { configureStore } from "./reducx/store";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  const {store,persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route element={<Adminpage />}>
            <Route path="/admin/*" element={<AdminRoute />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
