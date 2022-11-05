import { useState } from "react"
import './style.css'



const Form = ({title, handleClick}) => {
    const [email, SetEmail] = useState('')
    const [pass, SetPass] = useState('')


    return (
        <div className="login-card">
            <h1>Login</h1>
            <h3>Enter your credentials</h3>
                <div className="wrapp"> 
            <form className="login-form">
         <input
             className="control"
        type="email"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
        placeholder="Email"
        /> 
        <div className="password">
        <input
           className="control"
           id="password"
        type="password"
        value={pass}
        onChange={(e) => SetPass(e.target.value)}
        placeholder="Password"
        />

        <button
        className="control"
        type="button"
        onClick={() => handleClick(email,pass)}>
            {title}
        </button>
        </div>
            </form>

        </div>
          
        </div>
    )
}

export {Form}