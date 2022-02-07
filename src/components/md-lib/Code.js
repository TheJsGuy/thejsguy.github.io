import React from 'react';

export const pre = ({ children }) => <pre className="bg-stone-100 px-4 py-2 pt-6 relative">{children}</pre>;
export const code = ({ children, className='' }) => (
    <code className={`${className} text-sm`}>
        <span className="absolute top-0 right-0 py-1 px-3 bg-stone-300">{className?.split('-')[1]}</span>
        {children}
    </code>
);
