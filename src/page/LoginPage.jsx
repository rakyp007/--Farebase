import { Link, } from 'react-router-dom'
import { Login } from '../components/Login'
import '../components/style.css'

const LoginPage = () => {
  return (
    <div>
   
    <div className='sing'>
       or  <Link to="/register">Регистрация</Link>
    </div>
    <Login />
   
    </div>
  )
}

export default LoginPage

