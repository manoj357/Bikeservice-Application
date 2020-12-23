import React,{useEffect,useState} from 'react'
import './userdashboard.css'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from 'axios'
import{signout} from '../../context/auth'


function Admindashboard({history}){
    const [todo, setTodo] = useState([]);
    useEffect(()=> {
        let el = document.querySelector('.tabs');
  let instance = M.Tabs.init(el, {});

    })
   useEffect(()=> {
       axios.get('http://localhost:5000/api/service')
         .then(res => {
             console.log(res)
         })
   })
      
           
           

    
    
    
    return(
        <div className="main-2">
            <header>              
                <nav className="flex items-center justify-between flex-wrap bg-indigo-400">
                      <div className="flex items-center flex-shrink-0  mr-6">
                          <span className="font-semibold text-3xl  font-mono text-black">Autosparez</span>
                      </div>

                          <label className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
                           <input className="hidden" type="checkbox" id="menu-toggle" />

                         <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                               <div className="lg:flex-grow mr-0">
                                  <buttton    onClick={() => {
                                        signout()
                                         
                                         history.push('/home')
                                       
                                      }}className="block mt-4  lg:inline-block lg:float-right lg:mt-0 text-black font-semibold text-xl hover:text-white ">
                                        Logout
                                  </buttton>

                                </div>
                         </div>
 
                </nav>

            </header>
            <main>
                <div>
                                       <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <h1 className="text-Black font-mono text-center mt-8 font-bold text-xl">Ready To Work!!</h1>
                    <div className='mt-12 flex flex-col items-center'>
                    <ul id="tabs-swipe-demo" className="tabs">
                          <li className="tab col s3"><a href="#test-swipe-1">pending</a></li>
                           <li className="tab col s3"><a className="active" href="#test-swipe-2">ready for delivery</a></li>
                            <li className="tab col s3"><a href="#test-swipe-3">completed</a></li>
                    </ul>
                   <div id="test-swipe-1" className="col s12">
                     
                   
                   </div>
                   <div id="test-swipe-2" className="col s12 ">
                       Test 2
                   
                   </div>
                  <div id="test-swipe-3" className="col s12 ">
                      Test 3
                  
                  
                  </div>
              
                   
 
                    </div>
                    </div>
                    </div>
                </div>
               
            </main>
            <footer className=" bg-indigo-400 " style={{marginBottom:"0%"}}>
                <p className="text-center">@Autosparez Copyrights of 2020</p>
            </footer>
           
            
           
           
               
              
  
 



        </div>
    )
}
export default Admindashboard