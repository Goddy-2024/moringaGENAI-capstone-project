import { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

function App() {
  const [isAccount, setIsAccount] = useState(true);

  return (

    <div className='bg-[url(./assets/loginBG.jpg)] bg-cover min-h-screen md:bg-contain md:bg-[url(./assets/image.png)] flex align-center justify-center font-calibri text-[20px]'>
       { isAccount ? <LoginForm setIsAccount={setIsAccount}/> :
      <SignUpForm setIsAccount={setIsAccount}/>}

    </div>
  )
}

export default App
