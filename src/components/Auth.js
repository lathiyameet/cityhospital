import React, { useState } from 'react';

function Auth(props) {
    const [authtype, setAuthtype] = useState('Login')
    const [password , setpassword]=useState('password')
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
                <form className="php-email-form">
                    <div className="row justify-content-center">
                        <div className="col-md-7 form-group">
                            {
                                authtype === 'Login' && password === 'password'? null
                                    :
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                            }
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-4 ">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-4">
                    
                                    <input type="password" className="form-control" name="password" id="password" placeholder="password" data-rule="minlen:4" data-msg="Please enter a valid password" />
 
                            <div className="validate" />
                        </div>{

                        }
                        
                             <a href='#'> forget password ?</a>
                      
                       
                    </div>
                    <div className="text-center"><button type="submit">Login</button></div>
                
                </form>
                   
                
            </div>
            {
                authtype === 'Login' ?
                <span>caeate account <a href='#' onClick={() => setAuthtype('Signup')}> Signup</a></span>
                :
                <span> you have already account ?<a href='#' onClick={() => setAuthtype('Login')}> Login</a></span>
            }
        </section>
    );
}

export default Auth;