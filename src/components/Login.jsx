import { useDispatch } from "react-redux"
import {getAuth, signInWithEmailAndPassword}  from "firebase/auth"
import { Form } from "./Form"
import { setUser } from "../store/slices/useSlice"
import {  useNavigate } from "react-router-dom"


const Login = () => {
    const dispatch = useDispatch();
         const push = useNavigate();

   

    const handleLogin = (email ,password) => {
         const auth = getAuth();

         signInWithEmailAndPassword(auth, email ,password)
         .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id:user.uid,
          token: user.accessToken,
          }));
          push('/');
         })
         .catch(() => alert(`Welcome ${email}`) )
        
        }
  return (
    <Form
    title="LOGIN"
    handleClick={handleLogin}
   />
  )
}

export {Login}
