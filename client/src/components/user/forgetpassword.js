import React from 'react';


const ForgetPassword = () => {

  return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
     
                  <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                         <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                         <h1 className='text-2xl xl:text-3xl text-indigo-500 text-center font-bold font-mono'>Autosparez</h1>
                             <div className='mt-12 flex flex-col items-center'>
                                
                                    <h1 className='text-1xl xl:text-2xl font-bold font-mono'>
                                         Forget Password
                                    </h1>
                                 <div className='w-full flex-1 mt-8 text-indigo-500'>
              
                                      <form
                                        className='mx-auto max-w-xs relative '>
                                            <input
                                              className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                              type='email'
                                            placeholder='Email'/>
                                               <button
                                               type='submit'
                                               className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none' >
                                                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                                                  <span className='ml-3'>Submit</span>
                                               </button>
                                          </form>
                                   </div>
                              </div>
                      </div>
              </div>
    </div>
  );
};

export default ForgetPassword;