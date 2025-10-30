import React from 'react'

const SignUpForm = ({setIsAccount}) => {
    
  return (
    <div className='relative top-50 bg-[#D9D9D9]/75 h-fit rounded-md p-10 flex flex-col gap-1 w-1/4'>
      <h1 className='text-[#2E5261] text-[40px] font-black text-center'>Create Account</h1>
        <div>
            <p><label htmlFor="username">Enter username</label></p>
            <input type="text" name="username" id="" className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm border-[#8FA3B0]'/>
        </div>
        <div>
            <p><label htmlFor="password">Enter password</label></p>
            <input type="password" name="" id="" className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm'/>
        </div>
        <div>
        <div>
            <p><label htmlFor="re-password">Re-enter password</label></p>
            <input type="password" name="re-password" id="" className='w-full h-[58px] px-5 rounded-md bg-white shadow-sm border-[#8FA3B0]' />
        </div>
        </div>
      <button className='font-bold text-[32px] text-white bg-[#192C32] p-5 h-[58px] flex items-center rounded-md w-full justify-center mt-20'>Sign Up</button>
      <p className='text-right text-[#646567] hover:underline hover:cursor-pointer' onClick={()=>{setIsAccount(true)}}>Already have an account?</p>
    </div>
  )
}

export default SignUpForm
