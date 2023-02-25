import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = ({addAuth, checkAuth}) => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate();
  const signIn = () => {
    if(inputValue === 'pass') {
      addAuth('auth');
      navigate('/shrine');
    }
  }
  return (
  <div className="text">
    <p>auth</p>
    <input name="authInput" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    <button onClick={signIn}>Sign In</button>
  </div>
  )
};

export default Authenticate;