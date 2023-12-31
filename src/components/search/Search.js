import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
    <div className='container'>
        <div className='left'>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p>"Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia
             Jamaica, Antigua, The Bahamas, Grenada, Barbados, and Curacao, our resorts feature unlimited gourmet dining, unique bars serving premium liquors and wines,
             and every land and water sport, including complimentary green fees at our golf resorts and PADI-certified scuba diving at most locations. If you are planning a wedding,
             Sandals is the leader in Caribbean destination weddings and honeymoon packages."</p>
        <div className='search-col-2'>
            <div className='box'>
                <div>
                    <img src={Gold} alt='gold' style={{marginRight: '1rem'}} />
                </div>
                <div>
                    <h3>WORLD'S LEADING</h3>
                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
            <div className='box'>
                <div>
                    <h3>NO ONE INCLUDES MORE</h3>
                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    <button>vIEW Packages</button>
                </div>
            </div>
        </div>
        </div>
        <div className='right'>
        <div className='promo'>
            <h4 className='save'> GET AN ADDITIONAL 10& OFF </h4>
            <p className='timer'>12 HOURS LEFT!!!</p>
            <p className='offers'>VIEW ALL CURRENT OFFERS</p>
        </div>
        <div>
            <form>
                <div className='input-wrap'>
                <label>Destinations</label>
                <select>
                    <option value='1'>Grande Antigua</option>
                    <option value='1'>Granada</option>
                    <option value='1'>Esmerald Bay</option>
                    <option value='1'>Bora Bora</option>
                    <option value='1'>Key West</option>
                    <option value='1'>Maldives</option>
                    <option value='1'>Barbados</option>
                </select>
                </div>
                <div className='date'>
                    <div className='input-wrap'>
                        <label>Check-In</label>
                        <input type='date'/>
                    </div>
                    <div className='input-wrap'>
                        <label>Check-Out</label>
                        <input type='date'/>
                    </div>
                </div>
                <button>Rates & Availabilities</button>
            </form>
        </div>

        </div>
    </div>
</div>
  )
}

export default Search
