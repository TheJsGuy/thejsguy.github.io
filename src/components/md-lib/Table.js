import React from 'react';

export const table = ({ children }) => (
    <table className="text-left" > {children}</table >
);

export const thead = ({ children }) => {
    return children && (
        <thead>{children}</thead>
    ) || null;
}

export const tbody = ({ children }) => {
    return children && (
        <tbody>{children}</tbody>
    ) || null;
}


export const tr = ({ children }) => {
    return children && (
        <tr className="text-left">{children}</tr>
    ) || null;
}

export const th = ({ children }) => {
    return children && (
        <th className="text-left">{children}</th>
    ) || null;
}

export const td = ({ children }) => {
    return children && (
        <td className="text-left">{children}</td>
    ) || null;
}