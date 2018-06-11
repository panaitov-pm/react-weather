import React, { Component, Fragment } from 'react';
import CityList from '../city/CityList';
import '../city/CityList.css';
import AddCity from '../Modals/AddCity';

import './Home.css';

class Home extends Component {
	state = {
		addCityModal : false,
		addCityModalTitle : 'Add City',
	};

	handleAddCityModal = ( e ) => {
		e.stopPropagation();
		this.setState( {
			addCityModal: !this.state.addCityModal
		} );
	};

	handleToggleCityModalTitle = ( text ) => {
		this.setState( {
			addCityModalTitle: text
		} );
	};

	render() {
		const { addCityModal, addCityModalTitle } = this.state;
		return (
			<Fragment>
				<div className="header">
					<AddCity
						onAddCityModal={this.handleAddCityModal}
						visible={addCityModal}
						onToggleCityModalTitle={this.handleToggleCityModalTitle}
						addCityModalTitle={addCityModalTitle}
					/>
				</div>
				<CityList
					onAddCityModal={this.handleAddCityModal}
					onToggleCityModalTitle={this.handleToggleCityModalTitle}
					visible={addCityModal} />
			</Fragment>
		);
	}
}

Home.propTypes = {};

export default Home;
