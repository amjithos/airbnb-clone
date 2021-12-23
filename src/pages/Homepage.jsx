import React from 'react'
import Footer from '../components/Footer'
import Discover from './Discover'
import Host from './Host'

function Homepage() {
    return (
        <div>
        <div className="home__container">
        <div className='container'>
          <div className="image__banner">
              <div className="col-md-6">
              <h1 className='animate__animated animate__fadeIn'>Not sure where to go? Perfect.</h1>
              <button className='btn btn-primary'><span>I’m flexible</span></button>
              </div>

          </div>
        </div>
        </div>

        <Host/>
        <Discover/>
        <Footer/>
        </div>
    )
}

export default Homepage
