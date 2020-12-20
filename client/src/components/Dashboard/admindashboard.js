import React from 'react'
import './userdashboard.css'


function Admindashboard(){
    return(
        <div class="main-2">
            <header>              
                <nav class="flex items-center justify-between flex-wrap bg-indigo-400">
                      <div class="flex items-center flex-shrink-0  mr-6">
                          <span class="font-semibold text-3xl  font-mono text-black">Autosparez</span>
                      </div>

                          <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
                           <input class="hidden" type="checkbox" id="menu-toggle" />

                         <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                               <div class="lg:flex-grow mr-0">
                                  <a href="#responsive-header" class="block mt-4  lg:inline-block lg:float-right lg:mt-0 text-black font-semibold text-xl hover:text-white ">
                                        Logout
                                  </a>

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