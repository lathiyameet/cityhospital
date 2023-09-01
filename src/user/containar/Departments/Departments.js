import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { grt_departmentData } from '../../../reducx/action/department.action';
import ListDepartment from './ListDepartment';
import { FetchDepartment } from '../../../reducx/Slice/departmentSlice';
import { ThemContext } from '../../../context/ThemContext';

function Departments(props) {
  const Dispatch = useDispatch()
  const departments = useSelector(state => state.department)
  const them = useContext(ThemContext)

  React.useEffect(() => {

    Dispatch(FetchDepartment());


  }, [])

  // const handlecart = (id) => {
  //   // Dispatch(Addcart({pid:id , Qty:1}))
  //   console.log("handlecart called", id);
  // }
  return (
    <>
      <section id="departments" className={`departments  ${them.them}`}>
        <div className="container">
          <div className="section-title">
            <h2 className={`${them.them}`}>Departments</h2>
          </div>



          <div className={`row ${them.them}`}>
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className={`nav-item ${them.them}`}>
                  {
                    departments.department.map((v, i) => {
                      return (
                        <a className={i === 0 ? `nav-link active show ${them.them}` : `nav-link ${them.them}`} data-bs-toggle="tab" href={`#tab-${i + 1} `}>{v.name}</a>
                      )
                    })
                  }

                </li>
              </ul>
            </div>


            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                {
                  departments.department.map((v, i) => {
                    return (
                      <div className={i === 0 ? 'tab-pane active show' : 'tab-pane'} id={`tab-${i + 1}`}>
                        <div className="row">
                          <div className="col-lg-8 details order-2 order-lg-1">
                            <h3 className={`${them.them}`}>{v.name}</h3>

                            <p className={`${them.them}`}>{v.desc}</p>
                          </div>
                          <div className="col-lg-4 text-center order-1 order-lg-2">
                            <img src={v.prce} alt className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    )
                  })

                }


              </div>
            </div>
          </div>



        </div>
      </section>




    </>

  );
}

export default Departments;