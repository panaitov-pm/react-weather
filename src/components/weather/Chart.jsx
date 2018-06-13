import PropTypes from 'prop-types';
import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';


const Chart = ( { data, tickFormat } ) => (
  <VictoryChart
    theme={VictoryTheme.material}
    domainPadding={15}
    width={700}
    height={250}
  >
    <VictoryAxis />
    <VictoryAxis
      dependentAxis
      tickFormat={( x ) => (`${x}${tickFormat}`)}
    />
    <VictoryLine
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      style={{
        data: { stroke: '#c43a31', strokeLinecap: 'round' },
        parent: { border: '1px solid #ccc' },
      }}
      interpolation="step"
      data={data}
      x="date"
      y="val"
    />
  </VictoryChart>
);

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  tickFormat: PropTypes.string.isRequired,
};


export default Chart;
