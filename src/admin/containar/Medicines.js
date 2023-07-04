import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string, number, date, InferType } from 'yup';
import { Formik, useFormik } from 'formik';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';


function Medicines(props) {
  const [open, setOpen] = React.useState(false);
  const [dis, setDis] = React.useState([]);
  const [update, setUpdate] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  useEffect(() => {

    let localData = JSON.parse(localStorage.getItem("medicine"));

    if (localData !== null) {
      setDis(localData)
    }

  }, [])




  const handlesubmitdata = (data) => {
      console.log(data);

      let rno = Math.floor(Math.random() * 1000);

      let newData = { id: rno, ...data };

      let localdata = JSON.parse(localStorage.getItem("medicine"));

      console.log(localdata);

      if (localdata === null) {
        localStorage.setItem("medicine", JSON.stringify([newData]))
        setDis([newData])
      } else {
          if(update){
            let udata =localdata.map((v) => {
                if(v.id === data.id){
                  return data;
                }else{
                  return v ;
                }   
            })
            localStorage.setItem("medicine", JSON.stringify(udata))
                setDis(udata)
          }else{
            localdata.push(newData)
            localStorage.setItem("medicine", JSON.stringify(localdata))
            setDis(localdata)
          }

      
      }

      handleClose();
      setUpdate(null)
    };

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("medicine"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("medicine", JSON.stringify(fdata))

    setDis(fdata)
  }


  const handleUpdate = (val) => {

    formik.setValues(val)
    handleClickOpen();
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

  // let d = new Date();
  // let nd = new Date(d.setDate(d.getDate() - 1))
  let medicineschema = object({

    name: string().required(),
    price: number().typeError('Please Enter Valid Price').required(),
    exdate: date().min(new Date(), "please entre a valid date").required(),
    exdate: string().required().test('message', 'Date Must be in Present Or Future',
      function (val) {
        let currentDate = new Date();
        console.log(currentDate);
        let pastDate = new Date(val);
        console.log(pastDate);
        if (currentDate >= pastDate) {

          return false;

        } else if (currentDate === pastDate) {
          return true;
        }
        else {
          return true;
        }
      }
    ),
    desc: string().required().test('message', 'Maximum 100 word allowed',
      function (val) {
        let desc = val.split(" ")
        console.log(desc);
        if (desc.length > 100) {
          return false
        } else {
          return true
        }
      }
    )

  })
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      exdate: '',
      desc: '',

    },
    validationSchema: medicineschema,
    onSubmit: (values, action) => {

      action.resetForm()
      handlesubmitdata(values);

    },
  });
  const { values, handleBlur, handleSubmit, errors, touched, handleChange } = formik



  return (
    <>
      <Box height={100} />
      <h1>Medicines</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Medicines
      </Button>
      <Dialog open={open} onClose={handleClose}>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField

              margin="dense"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Name"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.name && touched.name ?
                <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
            }
            <br />
            <p>Expired date
              <TextField

                margin="dense"
                id="name"
                value={values.exdate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="exdate"
                // label="Medicine_Expiry_Date"
                type="date"
                fullWidth
                variant="standard"
              />
              {
                errors.exdate && touched.exdate ?
                  <span className='error' style={{ color: 'red' }}>{errors.exdate}</span> : null
              }
            </p>
            <TextField

              margin="dense"
              id="name"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Price"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.price && touched.price ?
                <span className='error' style={{ color: 'red' }}>{errors.price}</span> : null
            }

            <TextField

              margin="dense"
              id="name"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Description"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.desc && touched.desc ?
                <span className='error' style={{ color: 'red' }}>{errors.desc}</span> : null
            }
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' onClick={handleClose}>Sumbit</Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
      <div style={{ height: 400, width: '60%' }}>
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