import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <h1>This is test</h1>
            <Link to="/dashboard">Go to DashBoard</Link>
        </div>
    );
};

export default Test;