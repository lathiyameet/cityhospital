import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { grt_departmentData } from "../action/department.action"
import { Putdepartmentdata, deletedepartmentdata, getdepartmentdata, getdoctorsdata, postdepartmentdata } from "../../common/apis/department.apis";

const initialState ={
    isLoading:false,
    department:[],
    error:null
}

export const FetchDepartment = createAsyncThunk(
    'department/fetch',
    // setTimeout(() => {
      
        
    // } ,[3000])
    async () => {
       await new Promise((resolve , reject) => setTimeout(resolve ,3000))
        let response = await getdepartmentdata();
        console.log(response);
        return response.data
    }
)

export const Deletedepartmentdata = createAsyncThunk(
    'department/delete',
    async (id) => {
        console.log(id);
     await deletedepartmentdata(id);
       
        return id
    }
)

export const Adddepartmentdata=createAsyncThunk(
    'department/add',
    async (data) => {
        let response = await postdepartmentdata(data);
        console.log(response);
        return response.data
    }
)

export const Editdepartmentdata=createAsyncThunk(
    'department/Edit',
    async (data) => {
        let response = await Putdepartmentdata(data);
        console.log(response);
        return response.data
    }
)
const onerror = (state ,action) => {
    state.isLoading =false ;
    state.error = action.error.message;
}
const onloading = (state ,action) => {
    state.isLoading = true
    state.error = null;
}

export const departmentSlice = createSlice({
    name:'department',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(FetchDepartment.pending ,onloading)
        .addCase(FetchDepartment.fulfilled ,(state,action) => {
            state.isLoading = false
            state.error =null
            console.log(action);
            state.department =action.payload
        })
        .addCase(FetchDepartment.rejected, onerror)

        .addCase(Adddepartmentdata.pending ,onloading)
        .addCase(Adddepartmentdata.fulfilled , (state ,action) => {
            state.department = state.department.concat(action.payload)
            state.isLoading = false
            state.error =null
        })
        .addCase(Adddepartmentdata.rejected, onerror)

        .addCase(Editdepartmentdata.pending ,onloading)
        .addCase(Editdepartmentdata.fulfilled ,(state ,action) => {
          let Udata =  state.department.map((v)=> {
                if(v.id === action.payload.id){
                    return action.payload
                }else{
                    return v
                }
            })
            state.isLoading = false
            state.error =null
            state.department = Udata
        })
        .addCase(Editdepartmentdata.rejected, onerror)

        .addCase(Deletedepartmentdata.pending ,onloading)
        .addCase(Deletedepartmentdata.fulfilled , (state ,action) => {
            state.isLoading = false
            state.error =null
            let Fdata=state.department.filter((v) => v.id !== action.payload);   
            console.log(Fdata);
            state.department = Fdata;
        })
        .addCase(Deletedepartmentdata.rejected, onerror)
    }
   
})

export default departmentSlice.reducer