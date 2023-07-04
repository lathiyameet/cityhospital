import React from 'react';
import { useFormik } from 'formik';
import { object, string, number, date, InferType, array, boolean } from 'yup';

function Test(props) {
       let userSchema = object({
        name: string().required().matches(/^[a-zA-Z ]{2,30}$/,"valid name").test('name', 'please enter full name', function (val){
            let arr=val.split(' ')
            if(arr.length === 3){
                return true
            }else{
                return false
            }
        }),
        email: string().email().required(),
        password: string().max(8).required().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"please Enter strog password"),
        Conformpassword:string().required().test('Conformpassword' ,'Conformpassword and passwore noy same',function(val){
            if(this.parent.password === val){
                return true
            }else{
                return false
            }
        }),
        country:string().required("select a country"),
        mobile: number().min(10).max(10).required().typeError("please enter number"),
        age: number().required().min(0).max(150),
        Address: string().required().test('Address', 'Maximum 100 word allowed',
            function (v) {
                if (v <= 150) {
                    return true
                } else {
                    return false
                }
            }
        ),
        DOB: date().required().test('messege', 'Must be in present and past.',
        function (v) {

            let currentDate = new Date();
            console.log(currentDate);
            let pastDate = new Date(v);
            console.log(pastDate);
            if (currentDate >= pastDate) {

                return true;

            } else {
                return false;
            }
        }
        ),
        gender:string().required(),
        hobbies:array().min(2).required(),
        checbox:boolean().oneOf([true]).required(),
        


        message: string().required().test('message', "maximum 5 word ", function (val) {
            let arr = val.split(' ');
            if (arr.length > 5) {
                return false
            } else {
                return true
            }
        })
    });
   

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country:'',
            mobile: '',
            password:'',
            age: '',
            Address: '',
            DOB: '',
            message: '',
            hobbies:'',
            gender:'',
            checbox:false
        },
        validationSchema: userSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { values, touched, handleBlur, handleChange, handleSubmit, errors, } = formik
    return (
        <div className='row '>

            {/* <h1>Error 404;</h1> */}
            <style dangerouslySetInnerHTML={{ __html: "\n        .error {\n            color: red;\n            font-size: 90%;\n        }\n    " }} />
            <form name="contactForm" className='row justify-content-center'  onSubmit={handleSubmit}>
                <h2 className="col-7">Application Form</h2>
                <div className="col-7">
                    <p>Full Name</p>
                    <input type="text" name="name" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Email </p>
                    <input type="text" name="email" onBlur={handleBlur}
                        onChange={handleChange} />   
                    <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>password</p>
                    <input type="password" name="password" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.password && touched.password ? errors.password : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Conform Password</p>
                    <input type="password" name="Conformpassword" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.Conformpassword && touched.Conformpassword ? errors.Conformpassword : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" maxLength={10} onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.mobile && touched.mobile ? errors.mobile : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Age</p>
                    <input type="number" name="age" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.age && touched.age ? errors.age : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Address</p>
                    <input type="text" name="Address" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.Address && touched.Address ? errors.Address : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>D.O.B</p>
                    <input type="date" name="DOB" onBlur={handleBlur}
                        onChange={handleChange} />
                    <span className='error'>{errors.DOB && touched.DOB ? errors.DOB : ''}</span>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Country</p>
                    <select name="country"onBlur={handleBlur} onChange={handleChange}>
                        <option value={0}>Select</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                    </select>
                    <span className='error'>{errors.country && touched.country ? errors.country : ''}</span>
                </div>
                <div className="col-7 justify-content-center ">
                    <p>Gender</p>
                    <span className='error'>{errors.gender && touched.gender ? errors.gender : ''}</span>
                    <div className="form-inline" name="gender"   onChange={handleChange} >
                        <p><input type="radio" name="gender" defaultValue="male"  /> Male</p>
                        <p><input type="radio" name="gender" defaultValue="female"  /> Female</p>
                    </div>
                </div>
                <div className="col-7 justify-content-center">
                    <p>Hobbies <i>(Optional)</i></p>
                    <span className='error'>{errors.hobbies && touched.hobbies ? errors.hobbies : ''}</span>
                    <div className="form-inline" >
                        <p><input type="checkbox" name="hobbies" value='Sports' onChange={handleChange} onBlur={handleBlur}
                            /> Sports</p>
                        <p><input type="checkbox" name="hobbies" value='Movies' onChange={handleChange} onBlur={handleBlur}
                            /> Movies</p>
                        <p><input type="checkbox" name="hobbies" value= 'Music' onChange={handleChange} onBlur={handleBlur}
                             /> Music</p>
                    </div>
                </div>
                <div className="col-7 justify-content-center">
                    <p> <input type="checkbox" name="checbox" defaultValue=" Remember me" onBlur={handleBlur}
                        onChange={handleChange} />Remember me </p>
                    <span className='error'>{errors.checbox && touched.checbox ? errors.checbox : ''}</span>

                </div>
                <div className="col-7 justify-content-center">
                    <input type="submit" defaultValue="Submit" />
                </div>
            </form>

        </div>
    );
}

export default Test;