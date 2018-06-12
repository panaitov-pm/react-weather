import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { generate as id } from 'shortid';
import { editCity, fetchWeather, getError } from '../../AC';

import countriesCode from '../../countriesCode.json';
import ErrorMessage from '../ErrorMessage';

import './AddCityForm.css';

class AddCityField extends Component {
  state = {
    city: '',
    country: '',
  };

  static getDerivedStateFromProps(props) {
    if (props.isLoading) {
      return {
        isDisabled: true,
      };
    }
    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { city, country } = this.state;
    const { fetchWeather, getError, editCity, entities, currentCity } = this.props;
    let cities = entities.reduce((acc, item) => {
      const city = item.name.toLowerCase();
      const country = item.sys.country.toLowerCase();
      const cityIds = item.id;

      (!entities.includes(country)) && acc.push(country);

      (!entities.includes(city)) && acc.push(city);
      (!entities.includes(cityIds)) && acc.push(cityIds);

      return acc;
    }, []);

    /*if ( !cities.includes( currentCity ) ) {
      if ( !cities.includes( country.toLowerCase() ) ) {
        fetchWeather( city, country );
      } else if ( !cities.includes( city.toLowerCase() ) ) {
        fetchWeather( city, country );
      } else {
        getError( 'You already have the city' );
      }
    } else {
      editCity( city, country, currentCity );
    }*/
    if(!cities.includes(country.toLowerCase()) || !cities.includes(city.toLowerCase())) {
    	if(!cities.includes(currentCity)) {
        fetchWeather(city, country);
    	} else {
        editCity(city, country, currentCity);
      }
    } else {
      getError('You already have the city');
    }

    this.setState({
      city: '',
      country: '',
    });
    this.handleIsFocus();
  };
  handleAddCity = ({ target }) => this.setState(() => {
    let value = target.value;
    if (target.name === 'city') {
      value = target.value.replace(/[^a-z ]/i, '');
    }
    return ({
      [target.name]: value,
    });
  }, () => {
    const { city, country } = this.state;
    this.setState({
      isDisabled: !(city.trim().length > 0 &&
        (country !== '-1' && country.trim().length > 0)),
    });
  });
  handleIsFocus = () => this.inputCity.focus();

  render() {
    const { city, country, isDisabled } = this.state;
    const { isError, isLoading, addCityModalTitle } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {
          (isError.length > 0) && (
            <Form.Field>
              <small style={{ color: 'red' }}><em><ErrorMessage title={isError} /></em></small>
            </Form.Field>
          )
        }
        <Form.Field>
          <label>Enter City</label>
          <input
            name="city"
            value={city}
            ref={(node) => this.inputCity = node}
            placeholder="Only latin letters"
            onChange={this.handleAddCity} />
        </Form.Field>
        <Form.Field>
          <label>Select Country</label>
          <select
            name="country"
            value={country}
            onChange={this.handleAddCity}>
            <option value="-1">Select Country</option>
            {
              countriesCode.map((country) => (
                <option key={id()} value={country.code.toLowerCase()}>{country.name}</option>
              ))
            }
          </select>
        </Form.Field>
        <Button
          type="submit"
          primary
          disabled={isDisabled}
          loading={isLoading}
        >{addCityModalTitle}
        </Button>
      </Form>
    );
  }
}

AddCityField.propTypes = {
  addCityModalTitle: PropTypes.string.isRequired,
  currentCity: PropTypes.number.isRequired,
  entities: PropTypes.array.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
  editCity: PropTypes.func.isRequired,
  isError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

AddCityField.defaultProps = {
  isError: '',
};


export default connect(
  ({ weather }) => ({
    isError: weather.isError,
    isLoading: weather.isLoading,
    entities: weather.entities,
  }),
  { fetchWeather, getError, editCity },
)(AddCityField);
