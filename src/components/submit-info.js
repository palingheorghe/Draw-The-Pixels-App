import React from 'react';

const SubmitInfo = (props) => {
    return (
        <div>
            <label>Width:</label>
            <input type="number" placeholder="0"/>
            <label>Height:</label>
            <input type="number" placeholder="0"/>
            <button type="button">Submit board</button>
        </div>
    );
};

export default SubmitInfo;