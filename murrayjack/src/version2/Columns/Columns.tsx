import * as React from 'react';
import './Columns.css';

export const Columns = ({ col1, col2 }: any) => {
    return (
        <div className="columns">
            <div>{col1}</div>
            <div>{col2}</div>
        </div>
    );
};
