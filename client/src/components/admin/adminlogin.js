import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



const Adminlogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
  
  });
  const { email, password1, } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit=e=> {
    e.PreventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: 'Submitting' });
     
    }
    toast.success('fields empty')
  }

  
return(


            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
              <ToastContainer/>
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
              <div className='mt-12 flex flex-col items-center'>
                <h1 className='text-2xl xl:text-3xl font-bold text-indigo-500'>
                AutoSparez sign-In
                </h1><br/>
                
                   </div>
                  <form
                    className='mx-auto max-w-xs relative '
                  
                  >
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                    
                    />
                    <input
                      className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange('password1')}
                      value={password1}
                    
                    />
                    <button
                      type='submit'
                      className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                    >
                      <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                      <span className='ml-3'>Sign In</span>
                    </button><br/>
                   
                  </form>
                </div>
              
                
           
          </div>
          
        
  
        )
        
}
export default Adminlogin