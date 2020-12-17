import React from 'react'



function Register() {
    return(
      
              <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                         <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                                 <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                                        <div className='mt-12 flex flex-col items-center'>
                                               <h1 className='text-2xl xl:text-3xl font-extrabold text-indigo-500'>
                                                   AutoSparez Signup
                                               </h1>

                                                 <form className='w-full flex-1 mt-8 text-indigo-500' >
                                                       <div className='mx-auto max-w-xs relative '>
                                                             <input
                                                             className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='text'
                                                               placeholder='Name'
                 
                                                             />
                                                            <input
                                                                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                                type='email'
                                                                placeholder='Email'
                
                                                             />
                                                              <input
                                                              className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                              type='password'
                                                              placeholder='Password'
                 
                                                             />
                                                               <input
                                                               className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                               type='password'
                                                               placeholder='Confirm Password'
                  
                                                                />
                                                             <button
                                                               type='submit'
                                                                className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non' >

                                                                <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                
                                                              </button>
                                                       </div>
                                                  </form>
                                             </div>
                                     </div>
              
                          </div>
              </div>

     
    )
}
export default Register