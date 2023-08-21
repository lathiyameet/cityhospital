import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../Firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";



const initialState = {
    isLoading: false,
    appoin: [],
    error: null
}

export const appoinAdd = createAsyncThunk(
    'appointment/Add',
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
                            const docRef = await addDoc(collection(db, "appointment"), iData);

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
export const getappoin = createAsyncThunk(
    'appointment/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appointment"));
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
export const Deleteappoin = createAsyncThunk(
    'appointment/delete',
    async (data) => {
        console.log(data);
        try {

            const deleteRef = ref(storage, 'prescription/' + data.prec_name);

            deleteObject(deleteRef).then(async () => {
                await deleteDoc(doc(db, "appointment", data.id));
            }).catch((error) => {

            });


            return data.id;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)
export const updataappoin = createAsyncThunk(
    'appointment/updata',
    async (data) => {
        console.log(data);

        try {
            if (typeof data.prce === 'string') {
                const aptRef = doc(db, "appointment", data.id);

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

                                    const appointmentRef = doc(db, "appointment", data.id);
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
const onerror = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
}
const onloading = (state, action) => {
    state.isLoading = true
    state.error = null;
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(appoinAdd.pending, onloading)
            .addCase(appoinAdd.fulfilled, (state, action) => {

                state.isLoading = false
                state.error = null
                console.log(action);
                state.appoin = state.appoin.concat(action.payload)
            })
            .addCase(getappoin.pending, onloading)
            .addCase(getappoin.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                console.log(action);
                state.appoin = action.payload
            })
            .addCase(Deleteappoin.pending, onloading)
            .addCase(Deleteappoin.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                console.log(action);
                state.appoin = state.appoin.filter((v) => v.id !== action.payload)
            })
            // .addCase(updataappoin.pending, onloading)
            .addCase(updataappoin.fulfilled, (state, action) => {


                state.isLoading = false

                console.log(action.payload);
                let Udata = state.appoin.map((values) => {
                    console.log(values.id);
                    if (values.id === action.payload.id) {
                        return action.payload
                    } else {
                        return values
                    }
                })
                state.appoin = Udata
            })
    }
});

export default appointmentSlice.reducer;