import React, { Fragment } from 'react';
import CityList from '../city/CityList';
import '../city/CityList.css';
import AddCity from '../Modals/AddCity';

import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="header">
        <AddCity />
      </div>
      <CityList />
    </Fragment>
  );
};

Home.propTypes = {};

export default Home;
