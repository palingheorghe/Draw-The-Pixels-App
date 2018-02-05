import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableCell from './table-cell';

class DrawingTable extends Component {

    constructor(props) {
        super(props);

        this.state = { color: '#929000'};
    }
    render(){
        const array = [];
    
        for(let i = 0; i < this.props.rows; i++) {
            array.push([]);
            for(let j=0; j < this.props.columns; j++){
                array[i].push(j);
            }
        }

        return (
            <div>
                <table className="Drawing-table">
                    <tbody>
                    { array.map( row => <tr>{ row.map( column =>  <TableCell color={this.props.color}/>) }</tr> ) }
                    </tbody>
                </table>
            </div>
        );
    }
};

DrawingTable.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default DrawingTable;