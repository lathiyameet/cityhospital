import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { grt_departmentData } from '../../../reducx/action/department.action';
import ListDepartment from './ListDepartment';

function Departments(props) {
  const Dispatch = useDispatch()
  const departments = useSelector(state => state.department)

  React.useEffect(() => {

    Dispatch(grt_departmentData());


  }, [])

  const handlecart = (id) => {
    // Dispatch(Addcart({pid:id , Qty:1}))
    console.log("handlecart called", id);
  }
  return (
    <>
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
          </div>



          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">E.N.T</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Cancer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Physiotherapy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Dental</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Neurosurgery</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                {
                  departments.department.map((v) => {
                    return (
                      <div className="tab-pane active show" id="tab-1">
                        <div className="row">
                          <div className="col-lg-8 details order-2 order-lg-1">
                            <h3>{v.name}</h3>
                            <p className="fst-italic">Vestibulum volutpat luctus quam sed finibus. Sed luctus odio eget ex posuere
                              hendrerit. Donec iaculis nisi ut purus dapibus</p>
                            <p>{v.desc}</p>
                          </div>
                          <div className="col-lg-4 text-center order-1 order-lg-2">
                            <img src="../assets/img/departments-1.jpg" alt className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    )
                  })

                }


                {/* <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Cancer</h3>
                      <p className="fst-italic">Quisque sapien ipsum, efficitur ac dui et, fringilla viverra tellus. Proin urna
                        augue, posuere ut pellentesque quis, cursus ac neque.</p>
                      <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                        tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                        tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="../assets/img/departments-2.jpg" alt className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Physiotherapy</h3>
                      <p className="fst-italic">Fusce placerat ornare enim sed varius. Mauris tortor diam, molestie eget
                        vulputate a, facilisis quis nibh. Donec blandit efficitur nulla</p>
                      <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                        tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                        tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="../assets/img/departments-3.jpg" alt className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Dental</h3>
                      <p className="fst-italic"> sollicitudin sed est. Vestibulum volutpat luctus quam sed finibus. Sed luctus
                        odio eget ex posuere hendrerit. Donec iaculis nisi ut purus.</p>
                      <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                        tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                        tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="../assets/img/departments-4.jpg" alt className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Neurosurgery</h3>
                      <p className="fst-italic">Aliquam sed convallis libero. Proin in mi tempor, convallis lectus sed,
                        convallis mauris. Quisque ac nulla et lorem ultricies vulputate.</p>
                      <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                        tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                        tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="../assets/img/departments-5.jpg" alt className="img-fluid" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>



        </div>
      </section>


      {/* <section id="medicines" className="medicines">
        <div className="container">
          <div className="section-title">
            <h2>Department</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
              luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
          </div>
        </div>
        <div className="container">
          <input type='search' name='search' onChange={(e) => handlechange(e.target.value)} />
          <div className='row'>
            <ListDepartment
              departmentData={departments.department}
              handlecart1={handlecart}

            />

          </div>

        </div>

      </section> */}

    </>

  );
}

export default Departments;