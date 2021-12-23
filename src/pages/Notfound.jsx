import React from 'react'

function Notfound() {
    return (
        <div>
           <div className="container">
               <div className="row notfound">
                   <div className="col-md-7">
                       <h1>Ooops!</h1>
                       <p>We can't seem to find the page you're looking for.</p>
                   </div>
                   <div className="col-md-5">
                       <img src={`${process.env.PUBLIC_URL}/images/404.gif`} alt="" />
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Notfound
