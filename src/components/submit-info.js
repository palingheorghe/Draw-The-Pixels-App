import React from 'react';
import PropTypes from 'prop-types';

const SubmitInfo = (props) => {

    function onInputChange(x, y) {
        props.changeDraw(x, y);
    }

    return (
        <div>
            <label>Width:</label>
            <input type="number" placeholder="0" onChange={event => props.changingRows(0, event.target.value)}/>
            <label>Height:</label>
            <input type="number" placeholder="0" onChange={event => props.changingRows(event.target.value, 0)}/>
        </div>
    );
};

SubmitInfo.propTypes = {
    changingRows: PropTypes.func.isRequired
};

export default SubmitInfo;