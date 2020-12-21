import React,{useEffect,useState} from 'react'
import './userdashboard.css'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css'
import {Redirect} from 'react-router-dom'



    const Userdashboard = ({history}) => {
        useEffect(()=> {
            let el = document.querySelector('.tabs');
  let instance = M.Tabs.init(el, {});
        })
        const [loggedOut, setLoggedOut] = useState(false)

 

     
    return(
        <div class="user">
            <header>              
                <nav class="flex items-center justify-between flex-wrap bg-indigo-400 ">
                      <div class="flex items-center flex-shrink-0  mr-6">
                          <span class="font-semibold text-3xl  font-mono text-black">Autosparez</span>
                      </div>

                          <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
                           <input class="hidden" type="checkbox" id="menu-toggle" />

                         <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                               <div class="lg:flex-grow mr-0">
                                  <button   
                                    
                  class="block mt-5  lg:inline-block lg:float-right lg:mt-0 text-black font-semibold text-xl hover:text-white ">
                                        Logout
                                  </button>

                                </div>
                         </div>
 
                </nav>

            </header>
            <main>
                <div>
                                       <div className='min-h-screen bg-grey-400 text-gray-900 flex justify-center'>
                                      
                                           <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                                                <h1 className="text-Black font-mono text-center mt-8 font-bold text-xl">Welcome user!!</h1>
                                             
                                                <ul id="tabs-swipe-demo" className="tabs">
                                       <li class="tab col s3"><a href="#test-swipe-1">Service</a></li>
    <li className="tab col s3"><a className="active" href="#test-swipe-2">status</a></li>
    <li className="tab col s3"><a href="#test-swipe-3">PreviousBooking</a></li>
  </ul>
  <div id="test-swipe-1" className="col s12 Whitecard">
  <form className='w-full flex-1 mt-8 text-indigo-500' >
                                                       <div className='mx-auto max-w-xs relative '>
                                                             <input
                                                             className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='text'
                                                               placeholder='OwnerName'
                                                              
                 
                                                             />
                                                            <input
                                                                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                                type='text'
                                                                placeholder="vechilename"
                                                               
                
                                                             />
                                                              <input
                                                              className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                              type='text'
                                                              placeholder='vechile no'
                                                             
                                                             />
                                                               <input
                                                               className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                               type='text'
                                                               placeholder='service type'
                                                             />
                                                             <button
                                                               type='submit'
                                                                className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non' >

                                                               Submit
                 
                                                              </button>
                                                             </div></form>
                  
  </div>
  <div id="test-swipe-2" className="col s12 White card">Test 2</div>
  <div id="test-swipe-3" className="col s12 White card">Test 3</div>
 
        
      

                  </div>       </div>            
                </div>
               
            </main>
               <footer className=" bg-indigo-400 " style={{marginBottom:"0%"}}>
                  <p className="text-center">@Autosparez Copyrights of 2020</p>
               </footer>
           
            
           
           
               
              
  
 



        </div>
    )
}
export default Userdashboard

