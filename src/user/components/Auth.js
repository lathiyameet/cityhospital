import React, { useState } from 'react';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import * as yup from 'yup';


function Auth(props) {
    const [authtype, setAuthtype] = useState('Login')
    // const [password, setpassword] = useState('password')

    let authObj = {}, initialval = {};
    if (authtype == 'Login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required()
        }
        initialval = {
            email: ' ',
            password: ''
        }
    } else if (authtype == 'Signup') {
        authObj = {
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        }
        initialval = {
            name: '',
            email: ' ',
            password: ''
        }
    } else {
        authObj = {
            email: yup.string().email().required()
        }
        initialval = {
            email: ' '
        }
    }

    let AuthSchema = yup.object(authObj)

    const formik = useFormik({
        initialValues: initialval,
        enableReinitialize: true,
        validationSchema: AuthSchema,
        onSubmit: (values, action) => {
            action.resetForm()
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { values, touched, handleBlur, handleChange, handleSubmit, errors, } = formik

    // console.log(authtype);
    
    return (
        
        <section id="appointment" className="appointment">
               <div className="container">
                <div className="section-title">
                    <h2>
                        {
                            authtype === 'Login' ? 'Login' : 'Signup'
                        }

                    </h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <form  onSubmit={handleSubmit} className="php-email-form">
                    <div className="row justify-content-center">
                        <div className="col-md-7 form-group">
                            {
                                authtype === 'Login' || authtype === 'forgrt'? null
                                    :
                                    <input type="text"
                                        name="name" className="form-control"
                                        id="name" placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />

                            }
                            <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>

                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-4 ">
                            <input type="email"
                                className="form-control" name="email"
                                id="email" placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email" />
                            <div className="validate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>

                        </div>
                      
                     {
                           authtype !== 'forgrt'? 
                           <div className="col-md-7 form-group mt-3 mt-md-4">
   
                               <input type="password"
                                   className="form-control" name="password"
                                   id="password" placeholder="password"
                                   data-rule="minlen:4"
                                   data-msg="Please enter a valid password"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                               />
                               <span className='error'>{errors.password && touched.password ? errors.password : ''}</span>
   
                               <div className="validate" />
                           </div> : null
                     }

{
                authtype === 'Login' ?
              <>
                    <span>caeate account <a href='#' onClick={() => setAuthtype('Signup')}> Signup</a></span> 
                    
                    <a href='#' onClick={() =>  setAuthtype('forgrt')}> forget password ?</a>
                    </> :
                    <span> you have already account ?<a href='#' onClick={() => setAuthtype('Login')}> Login</a></span>

                    
            }


                    </div>
                    <div className="text-center"><button type="submit">Login</button></div>

                </form>


            </div>
          
        </section>
    );
}

export default Auth;