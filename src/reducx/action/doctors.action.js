
import { Putdoctorsdata, deletedoctorsdata, getdoctorsdata, postdoctorsdata } from '../../common/apis/doctors.apis'
import * as ActionType from '../Actiontype'
import { setAlert } from '../Slice/alertSlice'

export const grt_doctorsData = () => (Dispatch) => {
   try{
      Dispatch(loadingData(true))
      setTimeout(function(){
         getdoctorsdata()
         .then((response) =>{
            Dispatch(setAlert({text :"Git DOCTOR Data." , color:'success'}))
            Dispatch({type : ActionType.GET_DOCTOR, payload :response.data})
      })
         .catch((error) => Dispatch(errorData(error.message)))

         // fetch("http://localhost:3004/doctor")
         // .then((response) => {
         //    if(response.ok){
         //       response.json();
         //    }
         //    throw new Error('something went wrong')
         // })
         // .then((Data) =>Dispatch({type : ActionType.GET_DOCTOR, payload :Data}))
         // .catch((error) => Dispatch(errorData(error.message)))
      },3000)
    
   }catch(error){
      console.log(error);
   }
 
}

export const AddDoctordata =(Data) => (Dispatch) => {
   // console.log(Data);
   try{
      postdoctorsdata(Data)
            .then((response) =>{
               Dispatch(setAlert({text :"Add DOCTOR Data." , color:'success'}))
               Dispatch({type : ActionType.ADD_DOCTOR, payload :response.data})
         })

      // fetch("http://localhost:3004/doctor", {
      //    method:'POST',
      //    headers: {
      //       "Content-Type": "application/json",
      //     },

      //     body: JSON.stringify(Data)
      // })
      // .then((response) => response.json())
      // // .then((data) =>console.log(data))
      // .then((Data) =>Dispatch({type : ActionType.ADD_DOCTOR, payload :Data}))
   }catch(error){
      console.log(error);
   }
}



export const DeleteDoctordata =(id) => (Dispatch) => {
      try{
         deletedoctorsdata(id)
          .then(() => {
            Dispatch(setAlert({text :" Delete DOCTOR Data." , color:'success'}))
            Dispatch({type:ActionType.DELETE_DOCTOR ,payload:id})
         })
         .catch((error) => console.log(error))
         // fetch("http://localhost:3004/doctor/"+ id, {
         //    method:'DELETE',
          
   
         // })
         // .then(Dispatch({type:ActionType.DELETE_DOCTOR ,payload:id}))
         // .catch((error) => console.log(error))
      }catch(error) {
         console.log(error);
      }   
} 


export const EditDoctordata =(data) => (Dispatch) => {
   try{
      Putdoctorsdata(data)
      .then(() => {
         Dispatch(setAlert({text :"Edit DOCTOR Data." , color:'success'}))
         Dispatch({type:ActionType.UPDTE_DOCTOR ,payload:data})
   })
      .catch((error) => console.log(error))
      // fetch("http://localhost:3004/doctor/"+data.id, {
      //    method:'PUT',
      //    headers: {
      //       "Content-Type": "application/json",
      //     },
      //    body: JSON.stringify(data)
      // })
      // .then(Dispatch({type:ActionType.UPDTE_DOCTOR ,payload:data}))
      // .catch((error) => console.log(error))
   }catch(error) {
      console.log(error);
   }

}

export const loadingData = (satus) => (Dispatch) => {
   Dispatch({type:ActionType.LOADING_DOCTOR , payload:satus})
}

export const errorData = (errormsg) => (Dispatch) => {
   console.log(errormsg);
   Dispatch({type:ActionType.ERROR_DOCTOR , payload:errormsg})
}

