import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //navigate(location?.state?.from?.location??'/');
    //console.log(location.state);
    navigate(-1);
  };

  return (
    <CustomButton type="click" onClick={goBack}>
      Go back
    </CustomButton>
  );
};

export default GoBackButton;

export const CustomButton = styled.button`
display: block;
  margin-bottom: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.spacing(1)};
  cursor: pointer;
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 700;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
`;
