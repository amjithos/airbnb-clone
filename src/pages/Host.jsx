import React from 'react'

function Host() {
    return (
        <div>
            <div className="container host__section">
                <div className="title pt-5">
                    <h2 className='animate__animated animate__fadeIn'>Inspiration for your next trip</h2>
                </div>

                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div class="card animate__animated animate__fadeIn">
                            <img class="card-img-top" src={`${process.env.PUBLIC_URL}/images/location.webp`} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Munnar</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div class="card animate__animated animate__fadeIn">
                            <img class="card-img-top" src={`${process.env.PUBLIC_URL}/images/location.webp`} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Lonavla</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div class="card animate__animated animate__fadeIn">
                            <img class="card-img-top" src={`${process.env.PUBLIC_URL}/images/location.webp`} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Lonavla</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div class="card animate__animated animate__fadeIn">
                            <img class="card-img-top" src={`${process.env.PUBLIC_URL}/images/location.webp`} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Lonavla</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Host
