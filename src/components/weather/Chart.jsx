import PropTypes from 'prop-types';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};
Chart.defaultProps = {
  color: 'blue',
};


export default Chart;
