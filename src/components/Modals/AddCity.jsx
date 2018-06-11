import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Transition } from 'semantic-ui-react';
import AddButton from '../AddButton';
import AddCityField from '../Forms/AddCityForm.jsx';

import './AddCity.css';

class AddCity extends Component {

	render() {
		const { visible, onAddCityModal, onToggleCityModalTitle, addCityModalTitle } = this.props;
		let isActive = (visible)
			? 'modal-window visible'
			: 'modal-window';

		return (
			<Fragment>
				<AddButton
					onAddCityModal={onAddCityModal}
					onToggleCityModalTitle={onToggleCityModalTitle}
				/>

				<Transition visible={visible} animation="fade" duration={500}>
					<div className="modal-overlay" onClick={onAddCityModal}>

					</div>
				</Transition>
				<div className={isActive}>
					<div className="modal-window__inner">
						<Header className="modal-window__header" as="h2">{addCityModalTitle}</Header>
						<div className="modal-window__content"><AddCityField addCityModalTitle={addCityModalTitle} /></div>
						<button className="modal-window__close" onClick={onAddCityModal}>
							<svg viewBox="0 0 294.843 294.843" style={{ enableBackground: 'new 0 0 294.843 294.843' }} version="1.1"
							     xmlns="http://www.w3.org/2000/svg">
								<path
									d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136 c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786 C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835 c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165 C294.843,66.133,228.71,0,147.421,0z" />
								<path
									d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236 c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z" />
								<path
									d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485 L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z" />
								<path
									d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485 c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z" />
							</svg>
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AddCity;

AddCity.propTypes = {
	addCityModalTitle     : PropTypes.string.isRequired,
	onAddCityModal        : PropTypes.func.isRequired,
	onToggleCityModalTitle: PropTypes.func.isRequired,
	visible               : PropTypes.bool.isRequired
}
