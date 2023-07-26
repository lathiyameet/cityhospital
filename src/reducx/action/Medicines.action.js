import * as ActionType from '../Actiontype'
 


export const get_medicinesdata = () => (Dispatch) => {
    try{
      
        fetch("http://localhost:3004/medicines")
          .then((response) => 
                response.json()
           )
          .then((Data) =>Dispatch({type : ActionType.GET_MEDICINES, payload :Data}))
          .catch((error) =>console.log(error))
   
    }catch(error){
       console.log(error);
    }
  
 }
 
 export const Addmedicinedata =(Data) => (Dispatch) => {
    // console.log(Data);
    try{
       fetch("http://localhost:3004/medicines", {
          method:'POST',
          headers: {
             "Content-Type": "application/json",
           },
 
           body: JSON.stringify(Data)
       })
       .then((response) => response.json())
       // .then((data) =>console.log(data))
       .then((Data) =>Dispatch({type : ActionType.ADD_MEDICINES, payload :Data}))
    }catch(error){
       console.log(error);
    }
 }
 
 
 
 export const Deletemedicinedata =(id) => (Dispatch) => {
       try{
          fetch("http://localhost:3004/medicines/"+ id, {
             method:'DELETE',
           
    
          })
          .then(Dispatch({type:ActionType.DELETE_MEDICINES ,payload:id}))
          .catch((error) => console.log(error))
       }catch(error) {
          console.log(error);
       }   
 }
 
 
 export const Editmedicinedata =(data) => (Dispatch) => {
    try{
       fetch("http://localhost:3004/medicines/"+data.id, {
          method:'PUT',
          headers: {
             "Content-Type": "application/json",
           },
          body: JSON.stringify(data)
       })
       .then(Dispatch({type:ActionType.UPDTE_MEDICINES ,payload:data}))
       .catch((error) => console.log(error))
    }catch(error) {
       console.log(error);
    }
 
 }
 
 