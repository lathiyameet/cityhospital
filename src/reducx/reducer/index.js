import { combineReducers } from "redux";
// import { counterReduc } from "./counter.reducer";
import { doctorReducer } from "./doctor.reducer";
import { medicinesReducer } from "./Medicines.reducer";
// import { cartReducer } from "./cart.reducer";
import { likeReducerdata } from "./favorite.reducer";
import counterReduc from "../Slice/counterSlice";
import cartReducer from "../Slice/cartSlice";
import departmentReducer from "../Slice/departmentSlice";
import alertReducr from "../Slice/alertSlice";
import { authReduc } from "./auth.reducer";
// import { departmentReducer } from "./department.reducer";





export const rootreducer =combineReducers({
    alert:alertReducr,
    counter:counterReduc,
    doctors:doctorReducer,
    mediciness:medicinesReducer,
    datalike:likeReducerdata,
    cart:cartReducer,
    department:departmentReducer,
    auth:authReduc
    // like:likeReducerdata
  
})