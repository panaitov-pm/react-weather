import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import convertTemperature from '../../utils/convertTemperature';
import convertUTCTimeStamp from '../../utils/convertUTCTimeStamp';
import isEmpty from '../../utils/isEmpty';
import ErrorMessage from '../ErrorMessage';

import Map from './Map';
import './Weather.css';

class Weather extends Component {
  state = {
    cityData: {},
  };

  static getDerivedStateFromProps(props, state) {
    const { weather, match } = props;
    let cityData = {};
    if (weather.length > 0) {
      cityData = weather.reduce((acc, item) => {
        if (item.id === +match.params.id) {
          acc = item;
        }
        return acc;
      }, {});
      return ({
        cityData,
      });
    }
    return null;
  }

  render() {
    const { cityData, cityData: { coord, name, main, weather, sys } } = this.state;
    const ROOT_ICON_URL = 'https://openweathermap.org/img/w';
    let lat = 0,
      lng = 0,
      temperature = '',
      celsius = convertTemperature('C'),
      weatherInfo;

    if (!isEmpty(cityData)) {
      lat = (!isEmpty(coord.lat)) && coord.lat;
      lng = (!isEmpty(coord.lon)) && coord.lon;
      temperature = celsius(main.temp);
      weatherInfo = weather[0];
    } else {
      return <h1><ErrorMessage title={'City wasn`t found'} /></h1>;
    }
    return (
      <Fragment>
        <h1>Weather in {name}, {sys.country}</h1>
        <div className="weather-widget">
          <div className="weather-widget__temperature">
            <h3>
              <img src={`${ROOT_ICON_URL}/${weatherInfo.icon}.png`} alt={`Weather ${cityData.name}, ${cityData.sys.country}`} />
              <span>{temperature} °C</span>
            </h3>

          </div>
          <p className="first-letter">{weatherInfo.description}</p>
          <ul className="list-group">
            <li className="list-group-item">
              <span>Cloudiness</span>
              <span className="first-letter">{weatherInfo.description}</span>
            </li>
            <li className="list-group-item">
              <span>Pressure</span>
              <span>{main.pressure} hpa</span>
            </li>
            <li className="list-group-item">
              <span>Humidity</span>
              <span>{main.humidity} %</span>
            </li>
            <li className="list-group-item">
              <span>Sunrise</span>
              <span>{convertUTCTimeStamp(sys.sunrise)}</span>
            </li>
            <li className="list-group-item">
              <span>Sunset</span>
              <span>{convertUTCTimeStamp(sys.sunset)}</span>
            </li>
            <li className="list-group-item">
              <span>Coords</span>
              <span>[{coord.lat}, {coord.lon}]</span>
              <div className="weather-widget__map">{
                (!!lat && !!lng) && <Map lat={lat} lng={lng} />
              }</div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.array.isRequired,
};

export default connect(
  ({ weather }) => ({
    weather: weather.entities,
  }),
)(Weather);
