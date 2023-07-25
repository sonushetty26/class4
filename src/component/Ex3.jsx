import React, { useState } from 'react'

/*functional (constructor) type component*/
function Ex3(props) {
     //const [state,handler] = useState(initial value)

     //state is internal variable ->state is private to component
     const [x,setX] = useState(1) //mutable states

     const [title,setTitle] = useState('Welcome to state')

     const [view,setView] = useState(false)

     const [users,setUsers] = useState(['raju' ,'john' ,'David'])

     const [emp,setEmp] = useState({
            name:'sanya',
            email:'sanya@gmail.com'
     })

     return(
        <div className="container">
            <div className="row">
                 <div className="col-md-12 text-center">
                  <h3 className="display-3 text-danger">useState(functional compoenent)</h3>  
                 </div>                
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success"> x = {x} </h1>
                    <hr/>
                    <h4 className="text-warning"> {title} </h4>
                    <hr/>
                    <h4 className={view ? "text-success": "text-danger"}>
                        view = {view ? "Say True" : "Say False"}
                    </h4>
                    <hr/>
                    <ul className="list-group">
                        {
                            users.map((item,index)=>{
                                return (
                                <li className="list-group-item" key={index}> {item} </li>
                                )
                            })
                        }
                    </ul>
                    <hr/>
                    <h4 className="text-info">{ emp.name} and  {emp.email} </h4>
                </div>
            </div>
        </div>
     )
}
export default Ex3