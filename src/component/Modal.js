import React, { useEffect, useState } from 'react'

const Modal = (props) => {
    const {activeProps } = props;
    const [formdata ,setFormData] = useState({
        email : '',
        password : ''
    })
    // console.log("modal data" , popupData)
    var popupData = localStorage.getItem("items")        
    console.log("popupDatapopupData" , popupData)

    const ValueChange = (e) => {
        setFormData({...formdata , [e.target.name] : e.target.value})
    }
    
    return (
        <>
            <div className={`modal ${activeProps === true ? "popupactive" : "popupdeactive" }`} >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value = {formdata.email}
                                        onChange={(e) => ValueChange(e)}
                                        
                                    />



                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value = {formdata.password}
                                        onChange={(e) => ValueChange(e)}
                                        
                                        name="password"
                                    />
                                </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal