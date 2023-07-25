import React,{ useRef } from 'react'

function Ex7(props){
    const fName = useRef()
    const fEmail = useRef()
    const fMobile = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            name: fName.current.value,
            email: fEmail.current.value,
            mobile: fMobile.current.value
        }
        console.log('register =' , data)
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-warning">useRef</h3>
                </div>
            </div>
               
         <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name"  ref={fName} id="name" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" ref={fEmail} id="email" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" ref={fMobile} id="mobile" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Register" className="btn btn-outline-success" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
        </div>
    )
}
export default Ex7