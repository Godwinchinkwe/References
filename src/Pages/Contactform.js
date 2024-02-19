import React, {useState}from 'react'
import "./Contactform.css"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Contactform = () => {
  const navigate = useNavigate()
  // const [inputs, setInputs] = useState({});

  const [ inputs, setInputs] = useState({
    // name: "",
    //  email: "",
    //  password:"",
    //  admin: false,
    //  required:"",
   });

 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }



  const handleSubmit = async (event) => {
    try {
      // setSpin(true)
      event.preventDefault();
      const config = {
        headers:{
          "Content-Type":"application/json"
        }
      }
      const response = await axios.post("https://agri-market.onrender.com/api/user", inputs, config);
      console.log(response);
      if(response.status === 201) {
        navigate('/Menu')
      }
      
    } catch (error) {
      if(error) {
        alert(error.response.data.message)
        window.location.reload()
      }
        console.log("error message",  error)
        console.log("response error", error.response.data.message)
    }
  };

  


  return (
    <div className='contactform_container'>
      <form className='contactform_wrap' onSubmit={handleSubmit}>
        <div className='sign_topcontent'>
         <h1 className='sign_text'>Sign Up</h1>
         <div className='underline'></div>
        </div>

        <div className='input_wrap'>
        <div className='input_sign'>
        <IoPerson className='signup_icon'/>
          <input className='inputss'
           placeholder='Name'
           type='text'
           name="name"
           required="true"
           value={inputs.name || ""} 
           onChange={handleChange}
           />
        </div>

        <div className='input_sign'>
          <MdOutlineMarkEmailUnread className='signup_icon'/>
          <input className="inputss" 
          placeholder='Email Id'
          type='email'
          name="email"
          value={inputs.email || ""} 
           onChange={handleChange}/>
        </div>


        <div className='input_sign'>
        <RiLockPasswordLine className='signup_icon' />
          <input className='inputss' 
          placeholder='Password'
          name='password'
          type='number'
          value={inputs.password || ""} 
          onChange={handleChange}
          />
          <AiOutlineEye className='passwordeye' /> <AiOutlineEyeInvisible className='passwordclose'/> 
        </div>
       </div>
       
        <div className='signupbutton'>
          <button className='btn_sign' type="submit">Sign Up</button>
          <button className='btn_login'>Login </button>
        </div>
      </form>

    </div>
  )
}

export default Contactform



// {props.name === "password" ? props.view ? 
// <AiOutlineEyeInvisible fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} />
//  : <MdRemoveRedEye fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} />
//   : null}
        
