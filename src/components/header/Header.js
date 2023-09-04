import React, { useState } from 'react'
import './header.css'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoInstagram} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import Logo from '../../Assets/Images/Logo.png'
function Header() {

    const [active,setActive] = useState(0)
    function scrollToSection(sectionId,index) {
        setActive(index)
        const section = document.querySelector(sectionId);
      
        if (section) {
          window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop,
          });
        }
      }

    const HeaderTags = [
        {
            name:'Home',
            link:'#section1'
        },
        {
            name:'About Us',
            link:'#section2'
        },  
        {
            name:'Our Services',
            link:'#section3'
        },
        {
            name:'Our Experience',
            link:'#section4'
        },
        {
            name:'Our Service',
            link:'#section4'
        },
        {
            name:'Resource',
            link:'#section3'
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
HeaderTags.map((tag,index)=>{
    return(
        
        <div className='homepagelink'>
            <a className={index===active?'activeanchor':'anchor'} href={tag.link} onClick={() => scrollToSection(tag.link,index)}>
            {tag.name}
</a></div>
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

//  <nav>
{/* <a href="#section1" onClick={() => scrollToSection('#section1')}>
Section 1
</a>
<a href="#section2" onClick={() => scrollToSection('#section2')}>
Section 2
</a>
<a href="#section3" onClick={() => scrollToSection('#section3')}>
Section 3
</a>
</nav>

<section id="section1">Section 1 Content</section>
<section id="section2">Section 2 Content</section>
<section id="section3">Section 3 Content</section> */}