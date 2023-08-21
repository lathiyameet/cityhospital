import React, { useContext, useEffect, useState } from 'react';
import CoustmButton from '../../components/UI/Button/CoustmButton';
import { object, string, number, date, InferType, mixed } from 'yup';

import { ThemContext } from '../../../context/ThemContext';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Deleteappoin, appoinAdd, getappoin, updataappoin } from '../../../reducx/Slice/appontmentSlice';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import { Box, Tab, Tabs } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { BsClipboardPlusFill } from "react-icons/bs";


function Appointment(props) {
  const Dispatch = useDispatch()
  const [value, setValue] = React.useState(0);
  const [updata, setupdata] = useState(false);
  const appoin = useSelector(state => state.apt)

  console.log(appoin);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const them = useContext(ThemContext)

  useEffect(() => {
    Dispatch(getappoin())
  }, [])

  let userSchema = object({
    prce: mixed().required(),
    name: string().required(),
    email: string().email().required(),
    phone: number().required("please enter your number").test('PhoneNumber', 'Must be exactly 10 number.', (value) => { if (value) { return value.toString().length === 10 } }),

    message: string().required().test('message', "maximum 5 word ", function (val) {
      let arr = val.split(' ');
      if (arr.length > 5) {
        return false
      } else {
        return true
      }
    }),
    date: date().min(new Date(), "please entre a valid date").required(),
    date: string().required().test('message', 'Date Must be in Present Or Future',
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

    department: string().required("select a department"),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      date: '',
      department: '',
      prce: '',
    },
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      console.log(values);
      if (updata) {
        Dispatch(updataappoin(values))
      } else {
        Dispatch(appoinAdd(values))
      }
      setValue(1)
      setupdata(false)
      action.resetForm()
    },
  });
  const { values, touched, handleBlur, handleChange, handleSubmit, errors, setValues, setFieldValue } = formik

  const handleDelete = (data) => {
    //  console.log(id);
    Dispatch(Deleteappoin(data))
  }

  const handleUpdate = (data) => {
    // Dispatch(updataappoin(data))
    setValues(data)
    setupdata(true)
    setValue(0)
  }
  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'email', width: 175 },
    { field: 'phone', headerName: 'phone number', width: 130 },
    { field: 'date', headerName: 'Appointment_Date', width: 130 },
    { field: 'department', headerName: 'department', width: 130 },
    { field: 'prce', headerName: 'file', width: 130 },

    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
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
    <section id="appointment" className={`appointment ${them.them}`}>
      <div className="container">
        <div className="section-title">
          <h2 className={`${them.them}`}>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <div className='justify-content-center'>
          <Tabs value={value} onChange={handleChangeTab} aria-label="icon label tabs example">
            <Tab icon={<BsClipboardPlusFill />} label="Book Appointment" />
            <Tab icon={<FavoriteIcon />} label="List Appointment" />

          </Tabs>
        </div>
        {
          value === 0 &&
          <form action method="post" role="form" onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" value={values.email} onBlur={handleBlur}
                  onChange={handleChange} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="number" className="form-control" name="phone" id="phone" maxLength={10} value={values.phone} onBlur={handleBlur}
                  onChange={handleChange} placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                <span className='error'>{errors.phone && touched.phone ? errors.phone : ''}</span>
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input type="date" name="date" className="form-control datepicker" value={values.date} onBlur={handleBlur}
                  onChange={handleChange} id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <span className='error'>{errors.date && touched.date ? errors.date : ''}</span>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="department" id="department" value={values.department} onBlur={handleBlur} onChange={handleChange} className="form-select">
                  <option value={0}>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <span className='error'>{errors.department && touched.department ? errors.department : ''}</span>
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <input type="file" name="prce" className="form-control datepicker"
                  onChange={(event) => setFieldValue("prce", event.target.files[0])} id="prce" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <img src={typeof values.prce === "string" ? values.prce : URL.createObjectURL(values.prce)} width={"50px"} height={"50px"} />
                <span className='error'>{errors.prce && touched.prce ? errors.prce : ''}</span>
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" onBlur={handleBlur}
                value={values.message}
                onChange={handleChange} name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
              <span className='error'>{errors.message && touched.message ? errors.message : ''}</span>
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            {/* <div className="text-center"><button type="submit">Make an Appointment</button></div>/ */}
            <div className="text-center"><CoustmButton >Make an Appointment</CoustmButton></div>
          </form>
        }
        {
          value === 1 &&
          <>

            <div className="php-email-form" style={{ height: "90vh", width: '100%' }}>
              <DataGrid
                rows={appoin.appoin}
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

        }


      </div>
    </section>

  );
}

export default Appointment;