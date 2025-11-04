import React from 'react'
import { useState } from 'react'

const SignUpForm = ({setIsAccount}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [clicked, setClicked] = useState(false)
  const [isCreationSuccess, setIsCreationSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  function checkPassword(e){
    console.log(e)
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  async function signUp(){
    setClicked(true)
    await delay(1500)
    setClicked(false)
    setIsCreationSuccess(true)
    setMessage("Account creation success!")
    await delay(2500)
    setMessage("Proceeding to login...")
    await delay(3000)
    setIsAccount(true)
    
    
    

  }
  return (
    <form onSubmit={handleSubmit} className='relative top-30 bg-[#D9D9D9]/75 h-fit rounded-md p-10 flex flex-col gap-10'>
      <h1 className='text-[#2E5261] text-[40px] font-black text-center'>Create Account</h1>
        <div>
            <p><label htmlFor="username">Enter username</label></p>
            <input type="text" 
            name="username" 
            onChange={checkPassword}
             className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm border-[#8FA3B0]'/>
        </div>
        <div>
            <p><label htmlFor="password">Enter password</label></p>
            <input 
            type="password" 
            name="" 
            onChange={checkPassword}
             className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm'/>
            
        </div>
        <div>
        <div>
            <p><label htmlFor="re-password">Re-enter password</label></p>
            <input type="password" name="re-password" id="" className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm border-[#8FA3B0]' />
            <p className='text-red-500 text-center font-sm'>{isPasswordIncorrect && "the passwords you entered do not match" }</p>
            <div className={isCreationSuccess ? "bg-green-600 w-full h-[50px] p-3 text-white text-center mt-5" : "hidden"} >{message}</div>
        </div>
        </div>
      <button 
      onClick={signUp}
      className='font-bold text-[32px] text-white bg-[#192C32] p-5 h-[58px] flex items-center rounded-md w-full justify-center mt-10'>{clicked ? "creating account..." :"Sign Up"}</button>
      
      <p className='text-right text-[#646567] hover:underline hover:cursor-pointer' onClick={()=>{setIsAccount(true)}}>Already have an account?</p>
    </form>
  )
}

export default SignUpForm
