import React, { useContext, useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';
import CoustmCard from '../../components/UI/CoustmCard';
import { useDispatch, useSelector } from 'react-redux';
import { get_medicinesdata } from '../../../reducx/action/Medicines.action';
import { cartdata } from '../../../reducx/action/cart.action';
import { Favorite_medicines } from '../../../reducx/action/favorite.action';
import { Addcart } from '../../../reducx/Slice/cartSlice';
import { ThemContext } from '../../../context/ThemContext';

function Medicines(props) {
  const them =useContext(ThemContext) 
  const [data, setdata] = useState([]);
  const Dispatch = useDispatch()
  const medicinedata = useSelector(state => state.mediciness)



  React.useEffect(() => {

    Dispatch(get_medicinesdata());


  }, [])

  // console.log(medicinedata.medicine);

  const handlechange = (val) => {
    // console.log(val);

    // let localData = JSON.parse(localStorage.getItem("medicine"));

    let fmdata = medicinedata.medicine

    let fdata = fmdata.filter((v) =>
      v.name.toLowerCase().includes(val.toLowerCase()) ||
      v.price.toString().includes(val) ||
      v.expiry.toString().includes(val) ||
      v.desc.toLowerCase().includes(val.toLowerCase())
    )
    // console.log(Fdata);
    setdata(fdata)
  }


  const handlecart = (id) => {
    Dispatch(Addcart({pid:id , Qty:1}))
    console.log("handlecart called",id);
  }

  const handleFavorit =(id) => {
    Dispatch(Favorite_medicines(id))
    console.log(id);
  }
  return (
    <section id="medicines" className={`medicines ${them.them}`}>
      <div className={`container ${them.them}`}>
        <div className="section-title">
          <h2>Medicines</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
        </div>
      </div>
      <div className="container">
        <input type='search' name='search' onChange={(e) => handlechange(e.target.value)} />
        <div className='row'>
          <ListMedicines
            Mdata={medicinedata.medicine}
            handlecart1={handlecart}
            handleFavorit={handleFavorit}
          />

        </div>

      </div>

    </section>


  );
}

export default Medicines;