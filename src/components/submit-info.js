import React from 'react';
import PropTypes from 'prop-types';

const SubmitInfo = (props) => {
    return (
        <div>
            <div className="Size-picker">
                <label>Height:</label>
                <input type="number" placeholder="25" onChange={event => props.changingRows(0, ~~event.target.value)}/>
                <label>Width:</label>
                <input type="number" placeholder="38" onChange={event => props.changingRows(~~event.target.value, 0)}/>
            </div>
            <div className="Color-picker">
                <label>Pick a color: </label>
                <input type="color" onChange={event => props.changingColor(event.target.value)}/>
            </div>
        </div>
    ); 
};

SubmitInfo.propTypes = {
    changingRows: PropTypes.func.isRequired, 
    changingColor: PropTypes.func.isRequired
};

export default SubmitInfo;