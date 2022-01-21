import React from 'react';
import { p as P } from './Paragraph';

export const Pill = ({ label }) => (
    <span className="bg-violet-700 mr-1 px-2 py-1 mt-1 rounded text-white cursor-pointer whitespace-nowrap">{label}</span>
);

export const PillSet = ({ items }) => (
    <P className="flex flex-wrap">
        {items.map(item => <Pill key={item} label={item} />)}
    </P>
);