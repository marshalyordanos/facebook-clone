import React from 'react'
import './logincard.css'
import Img from '../../img/img1.jpg'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const LoginCard = () => {
  return (
    <div className='logincard'>
      
        <div className='logincard__circle'>14</div>
        <HighlightOffIcon className='logincard__closeicon'/>
            <div className='logincard__img'>
                
               
            <img src={Img} />
            </div>
           <div className='login__cardName'>
           <p>Marshal</p>
           </div>
    </div>
  )
}

export default LoginCard