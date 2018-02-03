import React from 'react';

const SubmitInfo = (props) => {
    return (
        <div>
            <label>Width:</label>
            <input type="number" />
            <label>Height:</label>
            <input type="number" />
            <button type="button">Submit board</button>
        </div>
    );
};

export default SubmitInfo;