import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { grt_departmentData } from "../action/department.action"
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../Firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
    // async () => {
    //    await new Promise((resolve , reject) => setTimeout(resolve ,3000))
    //     let response = await getdepartmentdata();
    //     console.log(response);
    //     return response.data
    // }

    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));
            let Data = [];
            querySnapshot.forEach((doc) => {


                Data.push({
                    id: doc.id,
                    ...doc.data()
                })


            });
            return Data;
            console.log(Data);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const Deletedepartmentdata = createAsyncThunk(
    'department/delete',
    // async (id) => {
    //     console.log(id);
    //  await deletedepartmentdata(id);
       
    //     return id
    // }

    async (data) => {
        console.log(data);
        try {

            const deleteRef = ref(storage, 'prescription/' + data.prec_name);

            deleteObject(deleteRef).then(async () => {
                await deleteDoc(doc(db, "department", data.id));
            }).catch((error) => {

            });


            return data.id;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const Adddepartmentdata=createAsyncThunk(
    'department/add',
    // async (data) => {
    //     let response = await postdepartmentdata(data);
    //     console.log(response);
    //     return response.data
    // }

    async (data) => {
        console.log(data.prce.name);

        try {
            const Rno = Math.floor(Math.random() * 10000000000000)

            let iData = { data }
            const precgeRef = ref(storage, 'prescription/' + Rno + "_" + data.prce.name);

            await uploadBytes(precgeRef, data.prce)
                .then(async (snapshot) => {
                    console.log('Uploaded a blob or file!');

                    await getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            console.log(url);

                            iData = { ...data, prce: url, "prec_name": Rno + "_" + data.prce.name }
                            const docRef = await addDoc(collection(db, "department"), iData);

                            iData = {
                                id: docRef.id,
                                ...data,
                                prce: url,
                                "prec_name": Rno + "_" + data.prce.name
                            }
                        })
                });

            return iData;

        } catch (e) {
            // console.error("Error adding document: ", e);
        }
    }
)

export const Editdepartmentdata=createAsyncThunk(
    'department/Edit',
    // async (data) => {
    //     let response = await Putdepartmentdata(data);
    //     console.log(response);
    //     return response.data
    // }

    async (data) => {
        console.log(data);

        try {
            if (typeof data.prce === 'string') {
                const aptRef = doc(db, "department", data.id);

                await updateDoc(aptRef, data);

                return data;
            }
            else {
                const deleteRef = ref(storage, 'prescription/' + data.prec_name);
                let iData = { ...data }
                await deleteObject(deleteRef).then(async () => {
                    console.log("delete img");
                    const Rno = Math.floor(Math.random() * 10000000000000)


                    const precgeRef = ref(storage, 'prescription/' + Rno + "_" + data.prce.name);

                    await uploadBytes(precgeRef, data.prce)
                        .then(async (snapshot) => {
                            console.log('new img Uploaded a blob or file!');

                            await getDownloadURL(snapshot.ref)
                                .then(async (url) => {
                                    console.log(url);

                                    iData = { ...data, prce: url, "prec_name": Rno + "_" + data.prce.name }

                                    const appointmentRef = doc(db, "department", data.id);
                                    await updateDoc(appointmentRef, iData);

                                    iData = {

                                        ...data,
                                        prce: url,
                                        "prec_name": Rno + "_" + data.prce.name
                                    }
                                })
                        });
                })
                return iData;
            }
            // const updataRef = doc(db, "appointment", data.id);
            // await updateDoc(updataRef, data)
            // console.log(data);
            // return data

        } catch (e) {
            console.error("Error adding document: ", e);
        }

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