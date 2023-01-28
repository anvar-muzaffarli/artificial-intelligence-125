import React, {useRef} from 'react'
import './Navbar.css'
import brendinLogosu from '../assets/images/logo.svg'
// ARROW FUNCTION
// OBJECT DESTRUCUTRING
import {AiOutlineBars} from 'react-icons/ai'
import { GiCrossedSwords } from "react-icons/gi";
import Button from './Button';



// useRef
// useRef geriye current obyektini qaytarir
const Navbar = () => {
// OX FUNKSIYALAR ADI FUNKSIYADAN FERQI

const qaraDivUnvaniRef = useRef()
console.log(qaraDivUnvaniRef)
  const qaraMenyunuAc = (e) => {
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('bars-icon')) {
      qaraDivUnvaniRef.current.classList.add('aktiv')
    }
  }

  const qaraMenyunuBagla = (e) => {
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('cross-icon')|| kliklenenElement.classList.contains('nav-links')) {
      qaraDivUnvaniRef.current.classList.remove('aktiv')
    }
  }

  return (
    <>
    <div className='overlay' onClick={qaraMenyunuBagla} ref={qaraDivUnvaniRef}>
        <GiCrossedSwords className='cross-icon' onClick={qaraMenyunuBagla} />

        <div className='nav-links'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Servives</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
    </div>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={brendinLogosu} alt="SEO" /></a>
      <button onClick={qaraMenyunuAc} className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <AiOutlineBars className='bars-icon' />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
     
          <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>

        
        <li className="nav-item">
        <a className="nav-link text-white" href="#">Blogs</a>
      </li>

      <li className="nav-item">
      <a className="nav-link text-white" href="#">Contacts</a>
    </li>
 
   
    
        </ul>
{/* PROPS ANLAYISH PROPERTIES */}
        <Button butonunIcindekiYazi="Sign in" className="my-custom-btn" />
      </div>
    </div>
  </nav>

  </>
  )
}

export default Navbar