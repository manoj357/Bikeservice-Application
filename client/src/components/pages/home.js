import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios'


function Home() {
 const resetForm=()=>{
    document.getElementById('contact-form').reset();
}
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
   message:''
  });

  const { name, email, message} = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };


 const handleSubmit=(e)=> {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:5000/api/contactus", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            toast.success("Message Sent."); 
            resetForm()
        }else if(response.data.msg === 'fail'){
          toast.error("Message failed to send.")
        }
    })
}

    return(
    

        <div>
        <div className="text-Black bg-indigo-500 bg-opacity-70">
           
                    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                          <a href="/" className="font-bold text-2xl font-mono  lg:text-4xl">
                            Autosparez
                          </a>
                    </div>
             
             </div>
             <div className="py-20 hero bg-indigo-500">
    <div className="container mx-auto px-6">
      <div className="text-3xl font-bold mb-2 text-white font-mono">
         Book your vechile service in Easy way!!
      </div>
      <div className="text-2xl mb-8 text-gray-200">
       And 20% disscount for first service
      </div>
      <Link to="/login" className="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider">
        Get Started
      </Link>
    </div>
  

    </div>
    <section className="container mx-auto px-6 py-10">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-0">
      Features
    </h2><br/>
    <div className="flex items-center flex-wrap mb-10">
      <div className="w-full md:w-1/2 px-4">
        <h4 className="text-2xl text-gray-800 font-bold mb-3">
         Modifications
        </h4>
        <p className="text-gray-600 mb-8 text-xl">
        we modify different types of bikes and give them  a beautiful personlaity 
        and we have vintage bike collections . . . .
        </p>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img src="assets/bike.jpg" alt="responsive"/>
      </div>
    </div>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2 px-4">
        <img src="assets/image2.jpg" alt="component-friendly"/>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h4 className="text-2xl text-gray-800 font-bold mb-3">
          Be With us
        </h4>
        <p className="text-gray-600 mb-8 text-xl">
            We takecare of your vechiles and provide
            all kind of Services. to Know more 
            about us Keep Signup  .  .  .  .
         
        </p>
      </div>
    </div>
   
    </section>
    <footer className="bg-indigo-500">
    <div className="container mx-auto px-6 pt-5 pb-6">
      <div className="flex flex-wrap">
        
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mb-6 font-bold">Social</h5>
          <ul className="mb-4">
            <li className="mt-2">
              <a href="/" className="hover:underline text-white hover:text-orange-500">Facebook</a>
            </li>
            <li className="mt-2">
              <a href="/" className="hover:underline text-white hover:text-orange-500">Linkedin</a>
            </li>
            <li className="mt-2">
              <a href="/" className="hover:underline text-white hover:text-orange-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="uppercase mb-6 font-bold">Company</h5>
          <ul className="mb-4">
            <li className="mt-2">
              <Link to="/login" className="hover:underline text-white hover:text-orange-500">Autosparez Login</Link>
            </li>
            <ToastContainer/>
            <li className="mt-2">
              <a href="/" className="hover:underline text-white hover:text-orange-500">policies</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4  text-center md:text-left" >
        <h5 className="uppercase  font-bold">Contact us</h5>
        <form className='w-full flex-1  text-indigo-500'onSubmit={handleSubmit} >
                                                       <div className='mx-auto max-w-xs relative ' >
                                                             <input
                                                             className='mt-8 w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-white text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='text'
                                                               placeholder='Name'
                                                               id="name"
                                                               onChange={handleChange('name')}
                                                               value={name}
                 
                                                             />

                                                            <input
                                                             className='mt-8 w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-white text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='email'
                                                               placeholder='email'
                                                               id="email"
                                                               onChange={handleChange('email')}
                                                               value={email}
                 
                                                             />

                                                             <textarea placeholder="subject" id="message"  onChange={handleChange('message')}
                                                               value={message} className='mt-8 w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'>
                                                               
                                                             </textarea>
                                                             <button
                                                               type='submit'
                                                                className='mt-5 tracking-wide font-semibold bg-white text-black w-full py-4 rounded-lg hover:bg-orange-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non' >

                                                               Submit
                
                                                              </button>
                                                             </div></form>

        </div>
        <div className="w-full md:w-1/4 text-center ">
        <h5 className="uppercase mb-6 text-xl font-bold font-mono md:mt-20 md:float-right">Autosparez Founded by<br/>-xxxnshb</h5>
       
        </div>
      </div>
    </div>
  </footer>

 
    </div>
           
    
       )
}
export default Home