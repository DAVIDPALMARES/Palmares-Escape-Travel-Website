import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImgCarouselStyles.css'

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
function ImgCarousel() {
  return (
    <div name='carousel' className='container'>
          <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={BoraBora} alt='/' />
                    <p className="legend">Bora Bora</p>
                </div>
                <div>
                    <img src={BoraBora2}/>
                    <p className="legend">Emerald Bay</p>
                </div>
                <div>
                    <img src={Maldives} />
                    <p className="legend">Maldives</p>
                </div>
            </Carousel>

    </div>

   

  )
}

export default ImgCarousel
