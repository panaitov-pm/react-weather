import axios from 'axios';
import C from '../constants';

const API_KEY = '14f41811d232243b0c30a30f286115e3',
  ROOT_URL = 'https://api.openweathermap.org/data/2.5/',
  WEATHER_URL = `${ROOT_URL}/weather`,
  FORECAST_URL = `${ROOT_URL}/forecast`;

export const fetchWeather = ( city, country ) => ( dispatch ) => {
  const weather_url = `${WEATHER_URL}?q=${city},${country}&APPID=${API_KEY}`,
    forecast_url = `${FORECAST_URL}?q=${city},${country}&APPID=${API_KEY}`;
  dispatch( {
    type: C.FETCH_WEATHER + C.START_LOADING,
  } );
  axios.get( weather_url ).then( response => response.data ).then( ( weather ) => {
    axios.get( forecast_url ).then( ( response ) => response.data ).then( ( forecast ) => {
      dispatch( {
        type: C.FETCH_WEATHER + C.FINISH_LOADING,
        weather,
        forecast,
      } );
    } );
  } ).catch( error => {
    dispatch( {
      type: C.FETCH_WEATHER + C.ERROR_LOADING,
      payload: error.response.statusText,
    } );
  } );
};

export const editCity = ( city, country, currentCity ) => ( dispatch, getStore ) => {
  const weather_url = `${WEATHER_URL}?q=${city},${country}&APPID=${API_KEY}`,
    forecast_url = `${FORECAST_URL}?q=${city},${country}&APPID=${API_KEY}`;
  dispatch( {
    type: C.EDIT_CITY + C.START_LOADING,
  } );
  axios.get( weather_url ).then( response => {
    const data = response.data,
      store = getStore(),
      entities = store.weather.entities,
      cityIndex = entities.findIndex( item => item.id === currentCity ),
      start = entities.slice( 0, cityIndex ),
      end = entities.slice( cityIndex + 1 );
    return [...start, data, ...end];
  } ).then( ( weather ) => {
    axios.get( forecast_url ).then( ( response ) => response.data ).then( ( forecast ) => {
      dispatch( {
        type: C.EDIT_CITY + C.FINISH_LOADING,
        weather,
        forecast,
      } );
    } );
  } ).catch( error => {
    dispatch( {
      type: C.EDIT_CITY + C.ERROR_LOADING,
      payload: error.response.statusText,
    } );
  } );
};

export const getError = ( text ) => ( dispatch ) => {
  dispatch( {
    type: C.FETCH_WEATHER + C.ERROR_LOADING,
    payload: text,
  } );
};

export const removeCity = ( id ) => ( dispatch ) => {
  dispatch( {
    type: C.REMOVE_CITY,
    payload: id,
  } );
};
