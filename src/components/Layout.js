import React from 'react';
import { ContentLoader } from './ContentLoader';
import { Navigation } from './Navigation';

export const Layout = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <section className="flex bg-purple-300 flex-grow-0 w-80 h-full flex-col">
                <Navigation />
            </section>
            <section className="flex flex-grow h-full p-8 flex-col overflow-y-auto overflow-x-clip">
                <ContentLoader />
            </section>
        </div>
    );
};