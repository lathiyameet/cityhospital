import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Favorite(props) {
// const Dispatch =useDispatch()
const medata =useSelector(state => state.mediciness)
const FavoriteData =useSelector(state => state.datalike)
console.log(medata,FavoriteData);


//    const Favorite = FavoriteData.Favorite.map((v) => {
//         let meData =medata.medicines.find((l) => l.id === v.pid)

//         let Fdata ={...meData, ...v}

//         return Fdata
//     })
// console.log(Favorite);
const  favordata =FavoriteData.Favorite.map((v) => {
        let Data =medata.medicines.find((m) => m.id === v.pid)

        let Fdata ={...Data , ...v}

        return Fdata
})
console.log(favordata);
    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>Favorite</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <div className="container">
            </div>
        </section>
    );
}

export default Favorite;