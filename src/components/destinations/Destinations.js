import React from 'react';
import './DestinationsStyles.css';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives3 from '../../assets/maldives3.jpg';
import KeyWest from '../../assets/keywest.jpg';

function Destinations() {
  return (
    <div name='destinations' className='destinations'>
      <div className='container'>
        <h1>All-Inclusive Resorts</h1>
        <h2>On the Caribbean's Best Beaches</h2>
        <div className='img-container'>
          <img className='span-3 image-grid-row-2' src={BoraBora} alt='Bora Bora' />
          <img src={BoraBora2} alt='Bora Bora 2' />
          <img src={Maldives} alt='Maldives' />
          <img src={Maldives3} alt='Maldives 3' />
          <img src={KeyWest} alt='Key West' />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
