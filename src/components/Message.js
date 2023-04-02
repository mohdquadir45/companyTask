import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './message.css'
const Message = () => {
  return (
      <div>
          <div className='container'>
              <div className='icons__container'>
                  <CheckCircleOutlineIcon/>
              </div>
              <div className='message__info'>
               <p>Thank You ! </p>
            </div>
          </div>
    </div>
  )
}

export default Message