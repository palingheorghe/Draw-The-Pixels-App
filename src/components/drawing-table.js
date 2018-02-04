import React from 'react';

const x = 30;
const y = 30;

const DrawingTable = (props) => {

    const array = [];
    
    for(let i = 0; i < x; i++) {
        array.push([]);
        for(let j=0; j < y; j++){
            array[i].push(j);
        }
    }

    return (
        <div>
            <table className="Drawing-table">
                <tbody>
                {
                    array.map( (row) => {
                        return (<tr>{ row.map((column) => { return (<td></td>) }) }</tr>)
                        })
                }
                </tbody>
            </table>
        </div>
    );
};

export default DrawingTable;