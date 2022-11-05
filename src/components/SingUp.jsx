import { useDispatch } from "react-redux"
import {getAuth, createUserWithEmailAndPassword}  from "firebase/auth"
import { Form } from "./Form"
import { setUser } from "../store/slices/useSlice"

import React from 'react'
import { useNavigate } from "react-router-dom"

const SingUp = () => {
    const dispatch = useDispatch();
    const {push} = useNavigate();
   

    const handleRegister = (email ,password) => {
         const auth = getAuth();
         createUserWithEmailAndPassword(auth, email ,password)
         .then(({user})=> {
          console.log(user);
          dispatch(setUser({
          email: user.email,
          id:user.uid,
          token: user.accessToken,
          }));
          push('/');
         })
         .catch(() => alert(`Wolcome ${email}`))
        }
  return (
    <Form
    title="LOGIN"
    handleClick={handleRegister}
    />
  )
}

export default SingUp;
