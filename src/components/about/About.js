import React from 'react'
import './about.css'
import linear from '../../Assets/Images/linear.png'
import howards from '../../Assets/Images/howards.png'
import bank from '../../Assets/Images/bank.png'
import ELLERY from '../../Assets/Images/ELLERY.png'
import GINGER from '../../Assets/Images/GINGER.png'
function About() {
  return (
    <div className='row m-0 p-0 aboutmain' id="section2">
      <img src={linear} className='gradian' />
      <div className='aboutspan'><div>About Olvera</div></div>
      {/* <div className='loreamdiv1'>
Change is the one
true constant in business.</div> */}
      <div className='loreamdiv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div className=' row aboutimgediv'>
    <img src={howards} className='col-lg-3 col-md-3  col-6 howards'/>
    <img src={bank} className='col-lg-3 col-md-3  col-6 howards'/>
    <img src={ELLERY} className='col-lg-3 col-md-3  col-6 howards'/>
    <img src={GINGER} className='col-lg-3 col-md-3  col-6 howards'/>
</div>
    </div>
  )
}

export default About
