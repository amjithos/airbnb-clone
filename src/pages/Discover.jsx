import React from 'react'

function Discover() {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                <div className="title pt-5">
                            <h2 className='animate__animated animate__fadeIn'>Discover Airbnb Experiences</h2>
                        </div>
                    <div className="col-md-6">
                        <div className="bg__discover">
                            <div className="col-md-7 content">
                            <h2 className='animate__animated animate__fadeIn'>Things to do on your trip</h2>
                            <button className='btn-secondary'>Expriences</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg__discover bg__discover1">
                            <div className="col-md-7 content">
                            <h2 className='animate__animated animate__fadeIn'>Things to do from home</h2>
                            <button className='btn-secondary'>Online Expriences</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover
