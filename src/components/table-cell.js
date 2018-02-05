import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableCell extends Component {
    constructor(props) {
        super(props);

        this.toggleColoredCell = this.toggleColoredCell.bind(this);
        this.state = {
            colored: false, 
            cellColor: ""
        };
    }

    componentWillMount() {
        this.setState({
            cellColor: this.props.color
        });
    }

    toggleColoredCell() {
        this.setState({
            colored: !this.state.colored
        })

        if(this.state.colored === false) {
            this.setState({
                cellColor: this.props.color
            });
        }
    }

    render() {
        return(
            <td onClick={ this.toggleColoredCell } style={{background: this.state.colored ? this.state.cellColor : "none"}}></td>
        );
    }
}

TableCell.propTypes = {
    color: PropTypes.string.isRequired
};

export default TableCell;