import axios from "axios";
const apiUrl = "http://nine024.onrender.com/";

export const getMovies = () => {
  try {
    let data = axios.get(`${apiUrl}api/popularity/?page=1`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesBysearch = (page, search) => {
  try {
    let data = axios.get(`${apiUrl}api/all/?page=${page}&query=${search}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoviesByid = (id) => {
  try {
    let data = axios.get(`${apiUrl}api/id/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
