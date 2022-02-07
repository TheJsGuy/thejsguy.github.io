import React from 'react';

export const p = ({ children, className = '' }) => <p className={`text-base ${className}`}>{children}</p>;
export const blockquote = ({ children }) => <blockquote className="bg-stone-100 px-4 py-2 font-mono border-l-4 border-stone-300 my-2">{children}</blockquote>
export const em = ({ children }) => <em className="font-serif">{children}</em>
