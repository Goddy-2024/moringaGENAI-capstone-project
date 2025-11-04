import React from 'react'
import { useState } from 'react'


const LoginForm = ({setIsAccount}) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleSubmit(e){
    e.preventDefault()

  }
  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function switchClick(){
    setIsClicked(true)
    await delay(2000)
    setIsClicked(false)
    
    
  }


  return (
    <form onSubmit={handleSubmit} className='relative top-30 bg-[#D9D9D9]/75 h-fit rounded-md p-10 flex flex-col gap-10'>
      <div className='text-[#2E5261]'>
      <h1 className='text-[40px] font-black text-center  '>Welcome back</h1>
      <p className='text-center '>Enter your username and password to login</p>
      </div>

      <div className=''>
      <p><label htmlFor="username">Enter username</label></p>
      <input type="text" name="username" className='w-full h-[58px] px-5 rounded-md' />
      </div>
      <div>
      <p><label htmlFor="password">Enter password</label></p>
      <input type="password" name="" className='w-full h-[58px] px-5 rounded-md'/>
      </div>
      <div>
      <button
      onClick={switchClick}
       className={isClicked ? "font-normal text-[32px] text-white bg-[#192C32] p-5 h-[58px] flex items-center rounded-md w-full justify-center mt-20" : 'font-bold text-[32px] text-white bg-[#192C32] p-5 h-[58px] flex items-center rounded-md w-full justify-center mt-20'}>{isClicked ? "loging in ..." : "Login"}</button>
      <p className='text-right text-[#646567] hover:underline hover:cursor-pointer' onClick={()=>{setIsAccount(false)}}>You don't have an account?</p>
      </div>
    </form>
  )
}

export default LoginForm
