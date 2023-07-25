import React, {  useEffect, useState} from 'react'
import Post from '../screen/Post'

const URL = 'https://jsonplaceholder.typicode.com'

/*useEffect => initial data, declared data or data acessing from Api*/


     //useEffect(Callback function ,[dependency list])
     /*
     React functional component lifecycle hooks
         mount
            useEffect(() ={},[])
       
         update -> state / props -dep
             useEffect(() ={},[dep])

         unmount
             useEffect(() =>{
                return () =>{
                    //unmount stage
                }
             },[])    
     */

        function Ex5(props){
           const [post, setPost] = useState([])

            const  getPosts = async() =>{
                await fetch(`${URL}/posts`, {
                    method:"GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then(data => data.json())
                .then(res =>{
                    console.log('response =' ,res)
                    setPost(res)
                }).catch(err =>console.log(err))
           }

           useEffect(() =>{
            getPosts() //async function call
           }, [])


        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-4 text-danger">useEffect Hook</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        post && post.map((item,index) => {
                            return(
                                <Post key={index} {...item}/>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default Ex5