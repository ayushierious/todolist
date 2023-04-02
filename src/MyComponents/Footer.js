import React from 'react'
import './footer.css'
export const Footer = () => {
  let footerStyle={
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
  return (
    <div className='bg-dark text-light py-3' style={footerStyle}> 
    <p className="text-center" style={{color:'whitesmoke'}}>
      Copyright &copy; MyTodosList.com
      </p> 
      
    </div>
  )
}

export default Footer
