import React,{useEffect,useState} from 'react'
import './userdashboard.css'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from 'axios'
import{toast,ToastContainer} from 'react-toastify'
import{signout,getCookie} from '../../context/auth'



function Admindashboard({history}){
   const[post,setposts]=useState([])
    useEffect(()=> {
        let el = document.querySelector('.tabs');
  let instance = M.Tabs.init(el, {});

    })
    const [formData, setFormData] = useState({
      
        email: '',
       message:''
      });
     
      
      const {  email, message,bike} = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
   useEffect(()=> {
       axios.get('http://localhost:5000/api/servicebooking')
       .then(res => {
         console.log(res)
         setposts(res.data)
       })
       .catch(err => {
           console.log(err)
       })
   },[])
 
   const handleSubmit=(e)=> {
    e.preventDefault();
    const bike= document.getElementById('bike').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:5000/api/servicedone", 
        data: {
          
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            toast.success("ready fro delivery Message Sent."); 
           
        }else if(response.data.msg === 'fail'){
          toast.error("Message failed to send.")
        }
    })
}

    
    
    
    
    return(
        <div className="main-2">
            <header>              
                <nav className="flex items-center justify-between flex-wrap bg-indigo-400">
                      <div className="flex items-center flex-shrink-0  mr-6">
                          <span className="font-semibold text-3xl  font-mono text-black">Autosparez</span>
                      </div>

                          <label className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" htmlFor="menu-toggle"><svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
                           <input className="hidden" type="checkbox" id="menu-toggle" />

                         <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                               <div className="lg:flex-grow mr-0">
                                  <button    onClick={() => {
                                        signout()
                                         
                                         history.push('/home')
                                       
                                      }}className="block mt-4  lg:inline-block lg:float-right lg:mt-0 text-black font-semibold text-xl hover:text-white ">
                                        Logout
                                  </button>

                                </div>
                         </div>
 
                </nav>

            </header>
            <main>
                <ToastContainer/>
                <div>
                                       <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <h1 className="text-Black font-mono text-center mt-8 font-bold text-xl">Ready To Work!!</h1>
                    <div className='mt-12 flex flex-col items-center'>
                    <ul id="tabs-swipe-demo" className="tabs">
                          <li className="tab col s3"><a href="#test-swipe-1">pending</a></li>
                           <li className="tab col s3"><a className="active" href="#test-swipe-2">ready for delivery</a></li>
                           
                    </ul>
                   <div id="test-swipe-1" className="col s12">
                     <ul>
                         {
                             post.map(post =><li>
                                 <h1 className="text-xl">vechilename:{post.vechilename}<br/>
                                 servicetype:{post.servicetype} <br/>
                                 phno:{post.phno}<br/>
                                 ownername:{post.ownername}<br/>
                                 <button className="bg-indigo-500">done</button></h1></li>)
                         }
                     </ul>
                   
                   </div>
                   <div id="test-swipe-2" className="col s12 ">
                       
                      <form onSubmit={handleSubmit}>
                                                        <input
                                                            className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='email'
                                                               placeholder='email'
                                                               onChange={handleChange('email')}
                                                               value={email}
                                                                 id="email"
                                                             />
                                                              <input
                                                            className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                              type='text'
                                                               placeholder='bikename'
                                                               onChange={handleChange('bike')}
                                                               value={bike}
                                                                 id="bike"
                                                             />
                                                             <textarea placeholder="subject" id="message"  onChange={handleChange('message')}
                                                               value={message} className='mt-8 w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'>
                                                               
                                                             </textarea>
                                                             <button
                                                             type='submit'
                                                             className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non' >

  submit</button>


                      </form>
                   
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