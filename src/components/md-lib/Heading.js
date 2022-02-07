import React from 'react';
import { theme } from '../../config/theme';

export const h1 = ({ children }) => <h1 className={`text-5xl mb-3 mt-4 bg-zinc-800 text-zinc-100 px-3 py-1 font-serif`}>{children}</h1>;
export const h2 = ({ children }) => <h1 className="text-3xl mb-3 mt-4">{children}</h1>;
export const h3 = ({ children }) => <h1 className="text-2xl mb-3 mt-3">{children}</h1>;
export const h4 = ({ children }) => <h1 className="text-xl mb-2 mt-2">{children}</h1>;
export const h5 = ({ children }) => <h1 className="text-lg mb-2 font-medium mt-2">{children}</h1>;
export const h6 = ({ children }) => <h1 className="text-base mb-1 font-semibold mt-2">{children}</h1>;
