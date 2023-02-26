import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shrine = ({checkAuth}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!checkAuth(1)) {
      navigate('/auth', { state: { source: 'shrine', requiredAuth: 1 } })
    }
  });
  
  return(
    <div className="text">
      <p className="title">Shrine</p>
    </div>
  )
};

export default Shrine;