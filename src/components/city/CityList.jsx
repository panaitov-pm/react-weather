import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';
import { removeCity } from '../../AC';
import Header from '../city/Header';

const cityBorderColors = [
	'red',
	'orange',
	'green',
	'blue',
	'violet',
	'purple',
	'pink'
];

class CityList extends Component {
	handleToggleAddCityModal = ( e ) => {
		const { onAddCityModal, onToggleCityModalTitle } = this.props;
		onToggleCityModalTitle( 'Edit City' );
		onAddCityModal( e );
	};

	render() {
		const max = (cityBorderColors.length - 1);
		const { entities, removeCity } = this.props;
		return (
			(entities.length > 0) &&
			<Fragment>
				<Header />
				<Card.Group>
					{
						entities.map( ( item ) => {
							const color = Math.max( Math.floor( Math.random() * max ) + 1, 0 );
							return (
								<Card fluid color={cityBorderColors[color]} key={item.id}>
									<Card.Header>
										<h4><NavLink to={`/city/${item.id}`}>{item.name}</NavLink></h4>
									</Card.Header>
									<Card.Meta>
										{item.sys.country}
									</Card.Meta>
									<Card.Description>
										<Button.Group>
											<Button
												animated="vertical"
												positive
												onClick={this.handleToggleAddCityModal}
											>
												<Button.Content visible>Edit</Button.Content>
												<Button.Content hidden>
													<Icon name="edit" />
												</Button.Content>
											</Button>
											<Button.Or />
											<Button
												animated="vertical"
												negative
												onClick={() => removeCity( item.id )}
											>
												<Button.Content visible>Delete</Button.Content>
												<Button.Content hidden>
													<Icon name="delete" />
												</Button.Content>
											</Button>
										</Button.Group>
									</Card.Description>
								</Card>
							);
						} )
					}
				</Card.Group>
			</Fragment>
		);
	}
};

CityList.propTypes = {
  entities: PropTypes.array.isRequired,
  onAddCityModal: PropTypes.func.isRequired,
  onToggleCityModalTitle: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired
}

export default connect(
	( { weather } ) => ({
		entities: weather.entities
	}),
	{ removeCity }
)( CityList );
