import React from 'react';
import AboutMe from '../content/about-me.mdx';

export const Layout = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <section className="flex bg-purple-300 flex-grow-0 w-96 h-full flex-col">
                <div className="flex py-8 px-4">
                    <h1 className="text-2xl font-mono">Hello Github</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <ul className="list-none  w-full mt-2">
                            <li><a className="flex w-full px-4 py-2 cursor-pointer hover:bg-purple-400">About Me</a></li>

                        </ul>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="flex w-full px-4 py-2 text-sm">Learning</h2>
                        <ul className="list-none  w-full mt-2">
                            <li><a className="flex w-full px-4 py-2 cursor-pointer hover:bg-purple-400">React Recipies</a></li>
                            <li><a className="flex w-full px-4 py-2 cursor-pointer hover:bg-purple-400">Problem Solving</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="flex flex-grow h-full p-8">
                <AboutMe />
            </section>
        </div>
    );
};