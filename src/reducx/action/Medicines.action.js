import * as ActionType from '../Actiontype'
import { setAlert } from '../Slice/alertSlice'



export const get_medicinesdata = () => (Dispatch) => {
   try {

      fetch("http://localhost:3004/medicines")
         .then((response) =>
            response.json()
         )
         .then((Data) => {
            Dispatch(setAlert({text :"Git medicines Data." , color:'success'}))

            Dispatch({ type: ActionType.GET_MEDICINES, payload: Data })

         })
         .catch((error) => console.log(error))

   } catch (error) {
      Dispatch(setAlert({text :"Api is not found." , color:'error'}))
      console.log(error);
   }

}

export const Addmedicinedata = (Data) => (Dispatch) => {
   // console.log(Data);
   try {
      fetch("http://localhost:3004/medicines", {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },

         body: JSON.stringify(Data)
      })
         .then((response) => response.json())
         // .then((data) =>console.log(data))
         .then((Data) => {
            Dispatch(setAlert({text :"Add medicines Data." , color:'success'}))
            Dispatch({ type: ActionType.ADD_MEDICINES, payload: Data })
         })
   } catch (error) {
      console.log(error);
   }
}



export const Deletemedicinedata = (id) => (Dispatch) => {
   try {
      fetch("http://localhost:3004/medicines/" + id, {
         method: 'DELETE',


      })
         .then(() =>{
            Dispatch(setAlert({text :"Delete medicines Data." , color:'success'}))
            Dispatch({ type: ActionType.DELETE_MEDICINES, payload: id })
         })
         .catch((error) => console.log(error))
   } catch (error) {
      console.log(error);
   }
}


export const Editmedicinedata = (data) => (Dispatch) => {
   try {
      fetch("http://localhost:3004/medicines/" + data.id, {
         method: 'PUT',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data)
      })
         .then(() => {
            Dispatch(setAlert({text :"Updte medicines Data." , color:'success'}))
            Dispatch({ type: ActionType.UPDTE_MEDICINES, payload: data })
         })
         .catch((error) => console.log(error))
   } catch (error) {
      console.log(error);
   }

}

