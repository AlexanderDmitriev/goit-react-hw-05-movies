import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //navigate(location?.state?.from?.location??'/');
    //console.log(location.state);
    navigate(-1);
  };

  return (
    <button type="click" onClick={goBack}>
      Go back
    </button>
  );
};

export default GoBackButton;
