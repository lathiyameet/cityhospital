import React, { useEffect } from 'react';
import { object, string, number, date, InferType } from 'yup';
import { Formik, useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Medicines from './Medicines';

function DoctorForm({onHandlesumit ,update}) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
      if(update){
        Formik.setValues(update)
        handleClickOpen();
      }

    },[update])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
    
      };

  // let d = new Date();
  // let nd = new Date(d.setDate(d.getDate() - 1))
  let medicineschema = object({

    name: string().required(),
    price: number().typeError('Please Enter Valid Price').required(),
  
  })


    const Formik = useFormik({
        initialValues: {
            name: '',
            price: ''
           
    
        },
        validationSchema: medicineschema,
        onSubmit: (values, action) => {
    
          action.resetForm()
          handleClose();
          onHandlesumit(values);
    
        },
      });
      const { values, handleBlur, handleSubmit, errors, touched, handleChange } = Formik
    return (
        <>
        {/* <Medicines /> */}
          
            <Box height={100} />
      <h1>doctor</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
      doctor
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
            

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' onClick={handleClose}>Sumbit</Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog> 
        </>
    );
}

export default DoctorForm;