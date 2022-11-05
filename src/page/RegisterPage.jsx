import React from 'react'
import { Link } from 'react-router-dom'
import SingUp from '../components/SingUp'
import '../components/style.css'

const RegisterPage = () => {
  return (
    <div>
      
      <SingUp/>
      <div className='sing1'>
              Already have an account? <Link to="/login">Sing</Link>

      </div>
    </div>
  )
}

export default RegisterPage
