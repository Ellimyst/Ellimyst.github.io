import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sha256 } from "js-sha256";


const Authenticate = ({addAuth, checkAuth}) => {
  const [inputValue, setInputValue] = useState('')

  const {state} = useLocation();
  const { source, requiredAuth } = state;
  const sourceTxt = source.charAt(0).toUpperCase() + source.slice(1);

  const [pText, setPText] = useState('');
  const navToSource = () => {
    if(checkAuth(requiredAuth)) {
      navigate('/'+source);
    } else {
      setPText('Not authenticated to proceed to ' + sourceTxt)
    }
  }
  
  const [pwdText, setPwdText] = useState('');
  const [txtClass, setTxtClass] = useState('');

  const navigate = useNavigate();
  const signIn = () => {
    switch (sha256(inputValue)) {
      case 'f5080edf6220a092c735d98a5ab380f930850b4d8728b2395d32576cd5f96a4c':
        addAuth(5);
        setTxtClass('success')
        setPwdText('Authenticated Successfully');
        setPText('');
        break;
      default:
        setTxtClass('error');
        setPwdText('Invalid Authentication');
    }
  }
  return (
  <div className="text">
    <p>auth</p>
    <input name="authInput" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    <button onClick={signIn}>Sign In</button>
    <br></br>
    <br></br>
    <p className={txtClass}>{pwdText}</p>
    <br></br>
    <br></br>
    <p>Proceed to </p> <button onClick={navToSource}>{sourceTxt}</button>
    <p className="error">{pText}</p>
  </div>
  )
};

export default Authenticate;