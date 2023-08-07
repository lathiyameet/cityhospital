import React, { useState } from 'react';
// import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import CoustmButton from './UI/Button/CoustmButton';
import Input from './UI/input/Input';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';


function Auth(props) {
    const [authtype, setAuthtype] = useState('Login')
    let Navigate = useNavigate()
    // const [password, setpassword] = useState('password')

    let authObj = {}, initialval = {};
    if (authtype == 'Login') {
        authObj = {
            email: yup.string().email().required(),
            password: yup.string().required()
        }
        initialval = {
            email: '',
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
            email: '',
            password: ''
        }
    } else {
        authObj = {
            email: yup.string().email().required()
        }
        initialval = {
            email: ''
        }
    }

    console.log(authObj, initialval);

    const handlelogin = (values) => {

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
               
                const user = userCredential.user;
                if(user.emailVerified){
                    console.log('login is successful');
                } else{
                    console.log('please verified your Email');
                }

                console.log();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        localStorage.setItem("login", 'true')
        Navigate("/")
    }
    const handleSignup = (values) => {
        console.log(values);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log("hello meet");
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode, errorMessage);
                            // ..
                        });
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }
    const handleforgrt = () => {

    }

    let AuthSchema = yup.object(authObj)

    const formik = useFormik({
        initialValues: initialval,
        enableReinitialize: true,
        validationSchema: AuthSchema,
        onSubmit: (values, action) => {
            action.resetForm()
            if (authtype === 'Login') {
                handlelogin(values)
            } else if (authtype === 'Signup') {
                handleSignup(values)
            } else if (authtype === 'forgrt') {
                handleforgrt()
            }
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
                <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row justify-content-center">
                        <div className="col-md-7 form-group">
                            {
                                authtype === 'Login' || authtype === 'forgrt' ? null
                                    :
                                    <Input type="text"
                                        name="name" className="form-control"
                                        id="name" placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        Errorstext={errors.name && touched.name ? errors.name : ''}
                                    />

                            }
                            {/* <span Errors='error'>{errors.name && touched.name ? errors.name : ''}</span> */}

                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-4 ">
                            <Input type="email"
                                name="email"
                                id="email" placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                Errorstext={errors.email && touched.email ? errors.email : ''}
                            />
                            <div className="validate"

                            />

                        </div>

                        {
                            authtype !== 'forgrt' ?
                                <div className="col-md-7 form-group mt-3 mt-md-4">

                                    <Input type="password"
                                        name="password"
                                        id="password" placeholder="password"
                                        data-rule="minlen:4"
                                        data-msg="Please enter a valid password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        Errorstext={errors.password && touched.password ? errors.password : ''}
                                    />


                                    <div className="validate" />
                                </div> : null
                        }

                        {
                            authtype === 'Login' ?
                                <>
                                    <span>caeate account <a href='#' onClick={() => setAuthtype('Signup')}> Signup</a></span>

                                    <a href='#' onClick={() => setAuthtype('forgrt')}> forget password ?</a>
                                </> :
                                <span> you have already account ?<a href='#' onClick={() => setAuthtype('Login')}> Login</a></span>


                        }


                    </div>

                    {
                        authtype === 'Login' ?
                            <div className="text-center"><CoustmButton type='primary' btndisabled={false}>Login</CoustmButton></div> :
                            authtype === 'Signup' ?
                                <div className="text-center"><CoustmButton type='secondery'>Sign up</CoustmButton> </div> :
                                <div className="text-center"><CoustmButton type='outliend'>Submit</CoustmButton> </div>
                    }
                    {/* <div className="text-center"><button type="submit" >Login</button></div> */}

                </form>


            </div>

        </section>
    );
}

export default Auth;