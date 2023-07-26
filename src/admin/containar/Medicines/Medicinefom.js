import React, { useEffect } from 'react';
import { object, string, number, date, InferType } from 'yup';
import { Formik, useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Medicines from './Medicines';
function Medicinefom({onHandlesumit ,update}) {
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
    expiry: date().min(new Date(), "please entre a valid date").required(),
    expiry: string().required().test('message', 'Date Must be in Present Or Future',
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


    const Formik = useFormik({
        initialValues: {
          name: '',
          price: '',
          expiry: '',
          desc: '',
    
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
          
              <TextField

                margin="dense"
                id="name"
                value={values.exdate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="expiry"
                // label="Medicine_Expiry_Date"
                type="date"
                fullWidth
                variant="standard"
              />
              {
                errors.expiry && touched.expiry ?
                  <span className='error' style={{ color: 'red' }}>{errors.expiry}</span> : null
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
        </>
    );
}

export default Medicinefom;