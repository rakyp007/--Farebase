import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate} from 'react-router-dom';
import {removeUser} from '../store/slices/useSlice'
import { getAuth } from "firebase/auth";

const HomePage = () => {
  const dispatch = useDispatch();

  const {useAuth, email} = getAuth();
  return useAuth ? (
    <div>
      <h1>Wolcome</h1>

      <button
      onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>

  ) : 
   (
     <Navigate to="/login"/>
  )        

  }

export default HomePage