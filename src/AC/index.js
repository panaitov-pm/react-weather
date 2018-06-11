import axios from 'axios';
import C from '../constants';

const API_KEY = '14f41811d232243b0c30a30f286115e3';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (city, country) => (dispatch) => {
  const url = `${ROOT_URL}?q=${city},${country}&APPID=${API_KEY}`;
  dispatch({
    type: C.FETCH_WEATHER + C.START_LOADING,
  });
  axios.get(url).then(response => {
    const data = response.data;
    dispatch({
      type: C.FETCH_WEATHER + C.FINISH_LOADING,
      payload: data,
    });
  }).catch(error => {
    dispatch({
      type: C.FETCH_WEATHER + C.ERROR_LOADING,
      payload: error.response.statusText,
    });
  });
};

export const editCity = (city, country, currentCity) => (dispatch, getStore) => {
	const url = `${ROOT_URL}?q=${city},${country}&APPID=${API_KEY}`;
	dispatch({
		type: C.EDIT_CITY + C.START_LOADING,
	});
	axios.get(url).then(response => response.data)
  .then(data => {
		const store = getStore();
		let entities = store.weather.entities;
		const cityIndex = entities.findIndex(item => item.id === currentCity);
		const start = entities.slice(0, cityIndex);
		const end = entities.slice(cityIndex + 1);
	  const cities = [...start, data, ...end];

    dispatch({
      type: C.EDIT_CITY + C.FINISH_LOADING,
      payload: cities,
    });

	}).catch(error => {
		dispatch({
			type: C.EDIT_CITY + C.ERROR_LOADING,
			payload: error.response.statusText,
		});
	});
};

export const getError = (text) => (dispatch) => {
  dispatch({
    type: C.FETCH_WEATHER + C.ERROR_LOADING,
    payload: text,
  });
};

export const removeCity = (id) => (dispatch) => {
  dispatch({
    type: C.REMOVE_CITY,
    payload: id,
  });
};
