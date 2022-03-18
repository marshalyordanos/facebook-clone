import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoginCard from './LoginCard'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
        
       <div className='login__top'>
           <h1>facebook</h1>
           <h3>Recent Logind</h3>
           <p> Click your picture or add account.</p>
           <div className='login__cards'>
               <LoginCard/> 
               <div className='login__card__con'>
                            <div className='login__card'>
                           <AddCircleOutlineIcon className='login__card__icon'/>    
            
                       </div>
            <p>Add Acount</p>
    </div>
           </div>
       </div>
       <div className='login__form'>
         <div className='login__formcard'>
          <form>
              <input type={"email"} placeholder ="email" />
              <input type={"password"} placeholder ="password" />
              <button>Login</button>
              <a href="#">Forget password</a>
              <hr className='login__hr'></hr>
              <button>create new account</button>

          </form>
         </div>
         <div className='login__create'>
             <p><a href='#'>Create a Page</a> for a celrbrity, brand or business</p>
         </div>
       </div>
    </div>
  )
}

export default Login