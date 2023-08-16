import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";



import { Route, Router, Routes } from 'react-router-dom';
import Adminpage from "./admin/components/Adminpage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Themprovider } from "./context/ThemContext";
import { persistor, store } from "./reducx/store";
import Alert from "./user/components/Alert/Alert";
import { SnackbarProvider } from "notistack";
import './rsuite.css';





function App() {

  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <Themprovider>
          <PersistGate loading={null} persistor={persistor}>
            <Alert />
            <Routes>
              <Route path="/*" element={<UserRoute />} />
              <Route element={<Adminpage />}>
              
                <Route path="/admin/*" element={<AdminRoute />} />
              </Route>
            </Routes>
          </PersistGate>
        </Themprovider>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;
