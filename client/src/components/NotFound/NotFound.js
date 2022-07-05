import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function NotFound() {
  
  const history = useHistory()
  
  useEffect(() => {
    alert('Page Not Found :(! Redirecting to Home!')
    setTimeout(() => {
      return history.push('/home')
    }, 3000)
  }, [history])
  
  return (
    <div>
      <h1>404- NOT FOUND!</h1>
    </div>
  )
}