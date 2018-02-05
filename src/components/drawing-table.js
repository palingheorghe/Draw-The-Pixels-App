import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableCell from './table-cell';

class DrawingTable extends Component {

    constructor(props) {
        super(props);

        //this.elementClicked = this.elementClicked.bind(this);
        this.state = { color: '#929000'};
    }
/*
    elementClicked(element) {
        this.setState({
            elementClicked: element
        });
        console.log('clicked that ' + element);
    }
*/
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
                    { array.map( row => <tr>{ row.map( column =>  <TableCell color={this.state.color}/>) }</tr> ) }
                    </tbody>
                </table>
            </div>
        );
    }
};

DrawingTable.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired
};

export default DrawingTable;