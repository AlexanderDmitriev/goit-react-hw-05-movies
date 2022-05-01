import axios from 'axios';
import { toast } from 'react-toastify';
import { BASIC_URL, PERSONAL_KEY } from './basicData';

const getData = async url => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    toast.error(error.message)
  }
};

export const getReviews = movieId => {
  const url = `${BASIC_URL}3/movie/${movieId}/reviews?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
  return getData(url);
  /* try {
    const response = await axios.get(url);
    
    //Проверяем наличие пришедших данных
    if (response.data.total_results > 0) {
      return response;
    }
  } catch (error) {
    alert(error);
  } */
};

export const getMovieDetails = movieId => {
  const url = `${BASIC_URL}3/movie/${movieId}?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
  return getData(url);
};
