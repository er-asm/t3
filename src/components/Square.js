import React from 'react'


const Square = ({value,btnClicked}) => {
  return (
    
      <button type='button' className='square' onClick={btnClicked}>{value}</button>
    
  )
}

export default Square
