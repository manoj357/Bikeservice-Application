import React,{useEffect,useState} from 'react'
import './userdashboard.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {  isAuth, getCookie, signout } from '../../context/auth'


const Userdashboard = ({history}) => {
  const [todo, setTodo] = useState([]);
    const [formData, setFormData] = useState({
        ownername: '',
        email: '',
        phno: '',
      servicetype: '',
      vechilename:'',
      vechileno:'',
        textChange: 'submit'
      });
    
      const { vechilename,ownername,vechileno,phno,email,servicetype, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };

    
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie('token');
    axios
      .get(`http://localhost:5000/api/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const {  name, email } = res.data;
        setFormData({ ...formData,  name, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });
  };
  const handleSubmit = e => {
    const token = getCookie('token');
    console.log(token);
    e.preventDefault();
    setFormData({ ...formData, textChange: 'Submitting' });
    setTodo([...todo,formData])
    setFormData({
      ownername: '',
        email: '',
        phno: '',
      servicetype: '',
      vechilename:'',
      vechileno:''
     })
    axios.post('http://localhost:5000/api/service',{
    ownername,
    email,
    phno,
  servicetype,
  vechilename,
  vechileno,
    })
    
    .then(res => {
      setFormData({
        ...formData,
        ownername: '',
        email: '',
        phno: '',
      servicetype: '',
      vechilename:'',
      vechileno:'',
        textChange: 'submitted'
      });

      toast.success(res.data.message);
    })
    .catch(err => {
      setFormData({
        ...formData,
       
      });
      console.log(err.response);
      toast.error(err.response.data.errors);
    }
  
     ) 
    
  }
   
      

    
     
    return(
        <div className="user">
               
            <header>              
                <nav className="flex items-center justify-between flex-wrap bg-indigo-400 ">
               <ToastContainer/>
                      <div className="flex items-center flex-shrink-0  mr-6">
                          <span className="font-semibold text-3xl  font-mono text-black">Autosparez</span>
                      </div>

                          <label className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" htmlFor="menu-toggle"><svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
                           <input className="hidden" type="checkbox" id="menu-toggle" />

                         <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                               <div className="lg:flex-grow mr-0">
                                  <button   
                                    onClick={() => {
                                        signout()
                                         
                                         history.push('/home')
                                       
                                      }}
                                    
                  className="block mt-5  lg:inline-block lg:float-right lg:mt-0 text-black font-semibold text-xl hover:text-white ">
                                        Logout
                                  </button>

                                </div>
                         </div>
 
                </nav>

            </header>
            <main>
            <div>
                                       <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <h1 className="text-Black font-mono text-center mt-8 font-bold text-xl">welcome to Autosparez !!</h1>
                    <div className='mt-12 flex flex-col items-center'>
                        
                    <form className='w-full flex-1 mt-8 text-indigo-500 ' onSubmit={handleSubmit} 
                                                >
                                                       <div className='mx-auto max-w-xs relative '>
                                                             <input
                                                             className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='text'
                                                               placeholder='vechilename'
                                                               onChange={handleChange('vechilename')}
                                                               value={vechilename}
                 
                                                             />
                                                            <input
                                                                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                                type='text'
                                                                placeholder='ownername'
                                                                onChange={handleChange('ownername')}
                                                                value={ownername}
                
                                                             />
                                                              <input
                                                              className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                              type='text'
                                                              placeholder='vechileno'
                                                              onChange={handleChange('vechileno')}
                                                              value={vechileno}
                 
                                                             />
                                                               <input
                                                               className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                               type='email'
                                                               placeholder='email'
                                                               onChange={handleChange('email')}
                                                               value={email}
                  
                                                                />

                                                              <input
                                                               className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                               type='text'
                                                               placeholder='phno'
                                                               onChange={handleChange('phno')}
                                                               value={phno}
                  
                                                                />
                                                                 <input
                                                               className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                                               type='text'
                                                               placeholder='servicetype'
                                                               onChange={handleChange('servicetype')}
                                                               value={servicetype}
                                                                 />
                                                                 <div><span className="text-smaller">water service/minor/major</span></div>
                                                             <button
                                                               type='submit'
                                                                className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non' >

                                                               
                                                                <span className='ml-3'>{textChange}</span>
                 
                                                              </button>
                                                       </div>
                                                  </form>
                   
 
                    </div>
                    </div>
                    </div>
                </div>


                <div>
                                   {todo.length === 0 ? (
                                          <h4 style={{textAlign:"center",paddingTop:"90px"}}>No Bookings</h4>
                                          ) : (
                                         todo.map((todo) => (
                                             <ul>
                                               <li  Key={todo.id}style={{textAlign:"center"}}><h5> vechilename:{todo.vechilename},vechileno:{todo.vechileno},ownername:{todo.ownername},servicetype:{todo.servicetype}</h5></li>
                                             </ul>
                                         ))
                                     )}
                                     <button onClick={(e)=>{setTodo(e.target.value) }} className="bg-indigo-500" >CLEAR</button>
                                    
                               
                             </div>
               
            </main>
 
               
          
               <footer className=" bg-indigo-400 " style={{marginBottom:"0%"}}>
                  <p className="text-center">@Autosparez Copyrights of 2020</p>
               </footer>
           
            
           
           
               
              
  
 



        </div>
    )
}
export default Userdashboard

