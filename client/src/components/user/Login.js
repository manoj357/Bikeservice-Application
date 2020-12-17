import React from 'react'



function Login(){

        return(
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
              <div className='mt-12 flex flex-col items-center'>
                <h1 className='text-2xl xl:text-3xl font-bold text-indigo-500'>
                AutoSparez sign-In
                </h1><br/>
                
                    <a
                      className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
               bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                      href='/register'
                      target='_self'
                    >
                      <i className='fas fa-user-plus fa 1x w-6  -ml-2 text-indigo-500' />
                      <span className='ml-4'>Sign Up</span>
                    </a>
                  </div>
                  <div className='my-12 border-b text-center'>
                    <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                      Or sign In with e-mail
                    </div>
                  </div>
                  <form
                    className='mx-auto max-w-xs relative '
                   
                  >
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                      type='email'
                      placeholder='Email'
                    
                    />
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                      type='password'
                      placeholder='Password'
                    
                    />
                    <button
                      type='submit'
                      className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                    >
                      <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                      <span className='ml-3'>Sign In</span>
                    </button><br/>
                    <a
                      href='/users/password/forget'
                      className='no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2'
                    >
                      Forget password?
                    </a>
                  </form>
                </div>
              
           
           
          </div>
          
        
  
        )

}
export default Login