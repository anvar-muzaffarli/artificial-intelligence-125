import React from 'react'
// object destructuring
const Button = ({butonunIcindekiYazi}) => {
  

  // telebeler = ["Burhan", 'Elmir', "Ruhin"]
// // array destructuring
//  const [t1,,t2] = telebeler

  // telebe1 = {
  //   ad:"Ruhin",
  //   soyad: "Elimerdan"
  // }
  // telebe1.ad
  return (
    <button className='my-custom-btn'>{butonunIcindekiYazi}</button>
    )
}

export default Button