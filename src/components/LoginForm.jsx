import React from 'react'

const LoginForm = ({setIsAccount}) => {
  return (
    <div className='relative top-50 bg-[#D9D9D9]/75 h-fit rounded-md p-10 flex flex-col gap-10'>
      <div className='text-[#2E5261]'>
      <h1 className='text-[40px] font-black text-center  '>Welcome back</h1>
      <p className='text-center '>Enter your username and password to login</p>
      </div>

      <div className=''>
      <p><label htmlFor="username">Enter username</label></p>
      <input type="text" name="username" id="" className='w-full h-[58px] px-5 rounded-md' />
      </div>
      <div>
      <p><label htmlFor="password">Enter password</label></p>
      <input type="password" name="" id="" className='w-full h-[58px] px-5 rounded-md'/>
      </div>
      <div>
      <button className='font-bold text-[32px] text-white bg-[#192C32] p-5 h-[58px] flex items-center rounded-md w-full justify-center mt-20'>Login</button>
      <p className='text-right text-[#646567] hover:underline hover:cursor-pointer' onClick={()=>{setIsAccount(false)}}>You don't have an account?</p>
      </div>
    </div>
  )
}

export default LoginForm
