import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shrine = ({checkAuth}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!checkAuth('auth')) {
      navigate('/auth')
    }
  });
  return(
    <div>
      <p>Shrine</p>
    </div>
  )
};

export default Shrine;