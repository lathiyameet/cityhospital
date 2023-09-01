import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { object, string, number, date, InferType } from 'yup';
import CoustmButton from '../../components/UI/Button/CoustmButton';
import { ThemContext } from '../../../context/ThemContext';


function Contact(props) {
  const them =useContext(ThemContext) 
  let userSchema = object({
    name: string().required(),
    email: string().email().required(),
    subject: string().required(),
    message: string().required().test('message', "maximum 5 word " ,function(val) {
      let arr =val.split(' ');
      if(arr.length > 5){
        return false
      }else{
        return true
      }
    })
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { values, touched, handleBlur, handleChange, handleSubmit, errors, } = formik
  return (
    <section id="contact" className={`contact ${them.them}`}>
      <div className="container">
        <div className="section-title">   
          <h2  className={`contact ${them.them}`}>Contact</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className={`info ${them.them}`}>
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4 className={`${them.them}`}>Location:</h4>
                <p className={`${them.them}`}> F-505, Inovative Plazza New Delhi, India</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4 className={`${them.them}`}>Email:</h4>
                <p className={`${them.them}`}>cityhospital@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4 className={`${them.them}`}>Call:</h4>
                <p className={`${them.them}`}>+91 9988776655</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} className={`php-email-form ${them.them}`}>
              <div className={`row ${them.them}`}>
                <div className={`col-md-6 form-group ${them.them}`}>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <span className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <span className='error'>{errors.email && touched.email ? errors.email : ''}</span>

                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span className='error'>{errors.subject && touched.subject ? errors.subject : ''}</span>

              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5} placeholder="Message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span className='error'>{errors.message && touched.message ? errors.message : ''}</span>

              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><CoustmButton>Send Message</CoustmButton></div>
            </form>
          </div>
        </div>
      </div>
    </section>


  );
}

export default Contact;