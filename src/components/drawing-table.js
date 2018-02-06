import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './table-cell';

const DrawingTable = (props) => {
    const array = [];
    for(let i = 0; i < props.rows; i++) {
        array.push([]);
        for(let j=0; j < props.columns; j++){
           array[i].push(j);
        }
    }

    return (
        <div>
            <table className="Drawing-table">
                <tbody>
                { array.map( row => <tr>{ row.map( column =>  <TableCell color={props.color}/>) }</tr> ) }
                </tbody>
            </table>
        </div>
    );
};

DrawingTable.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default DrawingTable;