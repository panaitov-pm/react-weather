import React, { Component, Fragment } from 'react';
import CityList from '../city/CityList';
import '../city/CityList.css';
import AddCity from '../Modals/AddCity';

import './Home.css';

class Home extends Component {
	state = {
		addCityModal : false,
		addCityModalTitle : 'Add City',
		currentCity: 0,
	};

	handleAddCityModal = ( e ) => {
		(e) && e.stopPropagation();

		this.setState( {
			addCityModal: !this.state.addCityModal
		} );
	};

	handleToggleCityModalTitle = ( text ) => {
		this.setState( {
			addCityModalTitle: text
		} );
	};

	handleEditCity = (id) => this.setState({currentCity: id});

	render() {
		const { addCityModal, addCityModalTitle, currentCity } = this.state;
		return (
			<Fragment>
				<div className="header">
					<AddCity
						onAddCityModal={this.handleAddCityModal}
						visible={addCityModal}
						onToggleCityModalTitle={this.handleToggleCityModalTitle}
						addCityModalTitle={addCityModalTitle}
						currentCity={currentCity}
					/>
				</div>
				<CityList
					onAddCityModal={this.handleAddCityModal}
					onToggleCityModalTitle={this.handleToggleCityModalTitle}
					onEditCity={this.handleEditCity}
					visible={addCityModal} />
			</Fragment>
		);
	}
}

Home.propTypes = {};

export default Home;
