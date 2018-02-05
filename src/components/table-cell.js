import React, { Component } from 'react';

class TableCell extends Component {
    constructor(props) {
        super(props);

        this.toggleColoredCell = this.toggleColoredCell.bind(this);
        this.state = {
            colored: false
        };

    }

    toggleColoredCell() {
        this.setState({
            colored: !this.state.colored
        })
        console.log(this.state.colored);
    }

    render() {
        return(
            <td onClick={ this.toggleColoredCell } style={{background: this.state.colored ? this.props.color : "none"}}></td>
        );
    }
}



export default TableCell;