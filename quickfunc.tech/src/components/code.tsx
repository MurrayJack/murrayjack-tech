import * as React from 'react';

export const Code: React.FC = ({ children }) => {
    return (
        <pre>
            {`// code`}
            {children}
        </pre>
    );
};
