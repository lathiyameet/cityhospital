import React, { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import Medicinefom from './Medicinefom';


function Medicines(props) {

  const [dis, setDis] = React.useState([]);
  const [update, setUpdate] = React.useState(null);
  useEffect(() => {

    let localData = JSON.parse(localStorage.getItem("medicine"));

    if (localData !== null) {
      setDis(localData)
    }

  }, [])




  const handlesubmitdata = (data) => {
    // console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localdata = JSON.parse(localStorage.getItem("medicine"));

    console.log(localdata);

    if (localdata === null) {
      localStorage.setItem("medicine", JSON.stringify([newData]))
      setDis([newData])
    } else {
      if (update) {
        let udata = localdata.map((v) => {
          if (v.id === data.id) {
            return data;
          } else {
            return v;
          }
        })
        localStorage.setItem("medicine", JSON.stringify(udata))
        setDis(udata)
      } else {
        localdata.push(newData)
        localStorage.setItem("medicine", JSON.stringify(localdata))
        setDis(localdata)
      }


    }

    
    setUpdate(null)
  };

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("medicine"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("medicine", JSON.stringify(fdata))

    setDis(fdata)
  }


  const handleUpdate = (val) => {

    // formik.setValues(val)
    // handleClickOpen();
    setUpdate(val)


  }

  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'exdate', headerName: 'Expiry_Date', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleUpdate(params.row)}>
            <EditIcon />
          </IconButton>

        </>

      )
    },

  ];

  return (
    <>


    <Medicinefom getdata ={handlesubmitdata} update = {update}/>
      <div style={{ height: "90vh", width: '100%' }}>
        <DataGrid
          rows={dis}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Medicines;