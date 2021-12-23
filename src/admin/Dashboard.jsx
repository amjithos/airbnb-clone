import React from 'react'

function Dashboard() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="host__form">
                    <div className="title">
                        <h2 className='pb-2'>You can host<br></br>anything, anywhere</h2>
                    </div>
                    <form>
                        <div class="form-group">
                            <label>Host Name</label>
                            <input type="text" class="form-control"  placeholder="Enter Host Name" />
                        </div>
                        <div class="form-group">
                            <label>Host Name</label>
                           <textarea name="content" class="form-control" rows="4" placeholder='Type Description'></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary"><span>Submit</span></button>
                    </form>
                </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
