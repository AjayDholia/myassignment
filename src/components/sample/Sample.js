import React from 'react'
import'./sample.css'
import laptop from '../../Assets/Images/laptop.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
function Sample() {
  return (
    <div className='row samplemain'>
      <div className='sapmleimage'>
        <img src={laptop} />
      </div>
      <div className='sampletext'>
<div className='samplename'>Olvera Guide</div>
      </div>
      <div className='sampleparagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
      <div className='flexsample'>
        <div >View More</div>
        <div className='arrow'>
            <FaLongArrowAltRight/>
        </div>
      </div>
    </div>
  )
}

export default Sample
