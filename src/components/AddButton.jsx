import PropTypes from 'prop-types';
import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const AddButton = ({ onToggleVisibility }) => {
  return (
    <Button animated="vertical" color="blue" onClick={onToggleVisibility}>
      <Button.Content visible>Add city</Button.Content>
      <Button.Content hidden>
        <Icon name="add" />
      </Button.Content>
    </Button>
  );
};

AddButton.propTypes = {
  onToggleVisibility: PropTypes.func.isRequired,
};

export default AddButton;
