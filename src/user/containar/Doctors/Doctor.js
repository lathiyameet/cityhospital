import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardTitle, } from 'reactstrap';
import { ThemContext } from '../../../context/ThemContext';


// import { Link } from 'react-router-dom';

const doctorData = [
  {
    id: 1,
    name: 'Name : Atha Smith',
    Dob: 'D.O.B : 10-4-1998',
    besingations: 'Desingations : Chief Medical Office',
    descriptions: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
    url: "../assets/img/doctors/doctors-1.jpg"
  },
  {
    id: 2,
    name: 'Name : John White',
    besingations: 'Desingations : Anesthesiologist',
    Dob: 'D.O.B : 9-6-1988',
    descriptions: 'Aenean ac turpis ante. Mauris velit sapien.',
    url: "../assets/img/doctors/doctors-2.jpg"
  },
  {
    id: 3,
    name: 'Name : Umika Loha',
    besingations: 'Desingations : Chief Medical Office',
    Dob: 'D.O.B : 5-1-1987',
    descriptions: 'Curabitur luctus eleifend odio. Phasellus placerat mi',
    url: "../assets/img/doctors/doctors-3.jpg"
  },
  {
    id: 4,
    name: 'Name : Daimy Smith',
    besingations: 'Desingations : Neurosurgeon',
    Dob: 'D.O.B : 9-9-1999',
    descriptions: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
    url: "../assets/img/doctors/doctors-4.jpg"
  }

]

function Doctor(props) {
  const { id } = useParams()
  const them =useContext(ThemContext) 

  let Fdata = doctorData.filter((v) => v.id === parseInt(id))
  console.log(Fdata);
  return (
    <div className={`row ${them.them}`}>
      <div className="col-lg-6">
        {/* <p>{id}</p> */}
        <div className="member d-flex align-items-start">
          <div className="pic photo"><img src={Fdata[0].url} className="img-doctor" alt /></div>
          <div className="member-info">
            <h4>{Fdata[0].name}</h4>
            <span >{Fdata[0].besingations}</span>
            <p className='span'>{Fdata[0].Dob}</p>
            <p>{Fdata[0].descriptions}</p>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Doctor;