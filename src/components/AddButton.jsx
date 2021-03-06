import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Button, Icon, Transition } from 'semantic-ui-react';

class AddButton extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 800);
  };

  componentWillUnmount() {
    this.setState({ isVisible: false });
  }

  handleToggleAddCityModal = (e) => {
    const { onAddCityModal, onToggleCityModalTitle } = this.props;
    onToggleCityModalTitle('Add City');
    onAddCityModal(e);
  };

  render() {
    const { isVisible } = this.state;
    return (
      <Transition visible={isVisible} animation="fly down" duration={500}>
        <Button animated="vertical" color="blue" onClick={this.handleToggleAddCityModal}>
          <Button.Content visible>Add city</Button.Content>
          <Button.Content hidden>
            <Icon name="add" />
          </Button.Content>
        </Button>
      </Transition>
    );
  }
};

AddButton.propTypes = {
  onAddCityModal: PropTypes.func.isRequired,
};

export default AddButton;
