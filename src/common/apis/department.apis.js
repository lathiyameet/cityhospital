import { deleteRequest, getRequest, postRequest, putdoctors } from "../request"

export const getdepartmentdata = () => {
   return getRequest('department')
}

export const postdepartmentdata = (data) => {
    return postRequest('department',data)
}

export const deletedepartmentdata = (id) => {
    return deleteRequest('department/'+id)
}

export const Putdepartmentdata = (data) => {
    return putdoctors('department/'+data.id,data)
}