import React from 'react'
import './header.css'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoInstagram} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import Logo from '../../Assets/Images/Logo.png'
function Header() {

    const HeaderTags = [
        {
            name:'Home',
            link:'/'
        },
        {
            name:'About Us',
            link:'/'
        },  
        {
            name:'Our Services',
            link:'/'
        },
        {
            name:'Our Experience',
            link:'/'
        },
        {
            name:'Our Service',
            link:'/'
        },
        {
            name:'Resource',
            link:'/'
        },
    ]
  return (
  <div>
      <div className='row headermain'>
    <p>TURNING UNCERTAINITY INTO YOUR ADVANTAGE</p>
    </div>

    <div className='headertags'>
        <img src={Logo} />
        {
HeaderTags.map((tag)=>{
    return(
        <div className='homepagelink'>{tag.name}</div>
    )
})
        }
        <button>Contact Us</button>
        <div className='reacticons'>
            <BsFacebook/>
            <BiLogoInstagram/>
            <AiFillLinkedin/>
        </div>
    </div>
  </div>
  )
}

export default Header
