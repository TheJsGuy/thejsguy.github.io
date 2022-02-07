import React, { useCallback, useEffect, useState } from 'react';
import { ContentLoader } from './ContentLoader';
import { Navigation } from './Navigation';
import { MenuIcon } from '@heroicons/react/solid';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
    const [hide, setHide] = useState(true);
    const toggle = useCallback(() => {
        setHide(!hide);
    }, [hide]);

    const { pathname } = useLocation();

    useEffect(() => {
        setHide(true);
    }, [pathname])

    return (
        <div className="flex flex-row w-full h-full">
            <section className={`bg-gradient-to-r from-zinc-200 to-zinc-300 flex-grow-0 h-full flex-col z-10 transition-all fixed ${hide ? 'hidden' : 'block'} min-w-[300px] md:relative md:flex md:min-w-[300px] `}>
                <Navigation />
            </section>
            <section className="flex flex-grow h-full p-8 flex-col overflow-y-auto overflow-x-clip">
                <button
                    onClick={toggle}
                    className="fixed min-w-[40px] min-h-[40px] right-10 top-8 z-10 border-solid border-2 px-1 rounded md:hidden"
                >
                    <MenuIcon />
                </button>
                <ContentLoader />
            </section>
        </div>
    );
};