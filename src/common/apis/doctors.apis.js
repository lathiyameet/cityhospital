import { deleteRequest, getRequest, postRequest, putdoctors } from "../request"

export const getdoctorsdata = () => {
   return getRequest('doctor')
}

export const postdoctorsdata = (data) => {
    return postRequest('doctor',data)
}

export const deletedoctorsdata = (id) => {
    return deleteRequest('doctor/'+id)
}

export const Putdoctorsdata = (data) => {
    return putdoctors('doctor/'+data.id,data)
}