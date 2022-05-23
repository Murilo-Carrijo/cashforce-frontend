// import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Context from './Context';

function Provider({ children }) {
//   const [planets, setPlanets] = useState([]);
//   const [filterByName, setFilterByName] = useState('');
//   const [column, setColumn] = useState('population');
//   const [comparison, setComparison] = useState('maior que');
//   const [value, setValue] = useState('0');
//   const [filterByNumericValues, setFilterByNumericValues] = useState([]);
//   const [columnValues, setColumnValues] = useState([
//     'population',
//     'orbital_period',
//     'diameter',
//     'rotation_period',
//     'surface_water',
//   ]);
//   const [comparisonValues, setComparisonValues] = useState([
//     'maior que',
//     'menor que',
//     'igual a',
//   ]);

//   const contexValue = {
//     planets,
//     setPlanets,
//     filterByName,
//     setFilterByName,
//     column,
//     setColumn,
//     comparison,
//     setComparison,
//     value,
//     setValue,
//     filterByNumericValues,
//     setFilterByNumericValues,
//     columnValues,
//     setColumnValues,
//     comparisonValues,
//     setComparisonValues,
//   };

//   return (
//     <Context.Provider value={ contexValue }>
//       {children}
//     </Context.Provider>
//   );
}

Provider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default Provider;