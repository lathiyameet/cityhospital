import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';
import CoustmCard from '../../components/UI/CoustmCard';

function Medicines(props) {
  const [data , setdata] = useState ([]);
  React.useEffect(() => {
    let locadata = JSON.parse(localStorage.getItem("medicine"));

    console.log('ttttttttt',locadata);
    if(locadata){
      setdata(locadata);
    }
   
    
  }, [])

  const handlechange = (val) =>{
    // console.log(val);

    let localData = JSON.parse(localStorage.getItem("medicine"));

    let Fdata =localData.filter((v) => 
    v.name.toLowerCase().includes(val.toLowerCase()) ||
    // v.price.toString().includes(val) ||
    // v.date.toString().includes(val) ||
    v.desc.toLowerCase().includes(val.toLowerCase())
    )
    // console.log(Fdata);
    setdata(Fdata)
}
  return (
    <section id="medicines" className="medicines">
    <div className="container">
      <div className="section-title">   
        <h2>Medicines</h2>
        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
          blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
          luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
      </div>
    </div>
    <div className="container"> 
      <input type='search' name='search'  onChange={(e) => handlechange(e.target.value)}/>
      <div className='row'> 
      <ListMedicines Mdata={data}/>
     
      </div>
         
    </div>

    </section>


  );
}

export default Medicines;