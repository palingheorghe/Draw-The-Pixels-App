import React from 'react';
import PropTypes from 'prop-types';

const SubmitInfo = (props) => {
    return (
        <div>
            <label>Height:</label>
            <input type="number" placeholder="2" onChange={event => props.changingRows(0, ~~event.target.value)}/>
            <label>Width:</label>
            <input type="number" placeholder="15" onChange={event => props.changingRows(~~event.target.value, 0)}/>
        </div>
    );
};

SubmitInfo.propTypes = {
    changingRows: PropTypes.func.isRequired
};

export default SubmitInfo;