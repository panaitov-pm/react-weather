import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Button, Icon } from 'semantic-ui-react';

class AddButton extends Component {
	handleToggleAddCityModal = (e) => {
		const { onAddCityModal, onToggleCityModalTitle } = this.props;
		onToggleCityModalTitle( 'Add City' );
		onAddCityModal(e);
	};

	render() {
		return (
			<Button animated="vertical" color="blue" onClick={this.handleToggleAddCityModal}>
				<Button.Content visible>Add city</Button.Content>
				<Button.Content hidden>
					<Icon name="add" />
				</Button.Content>
			</Button>
		);
	}
};

AddButton.propTypes = {
	onAddCityModal: PropTypes.func.isRequired
};

export default AddButton;
