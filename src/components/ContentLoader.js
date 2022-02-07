import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useAppConfig } from '../context/app-config-context';

import AboutMe from '../content/about-me.mdx';
import ApplicationSetup from '../content/react/application-setup.mdx';
import MediumProblems from '../content/problem-solving/medium-problems.mdx';

const contentFactory = {
    aboutMe: AboutMe,
    applicationSetup: ApplicationSetup,
    mediumProblems: MediumProblems
};

const Default = () => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('aboutMe')
    })
    return <br />;
}

export const ContentLoader = () => {
    const { nav: { links } } = useAppConfig();

    return (
        <Routes>
            {links.map(link => {
                if (!link.children) {
                    const Component = contentFactory[link.key];
                    return <Route key={link.key} path={link.key} element={<Component />} />
                }
                return link.children.map(subLink => {
                    const Component = contentFactory[subLink.key];
                    return <Route key={subLink.key} path={`${link.key}/${subLink.key}`} element={<Component />} />
                });
            })}
            <Route path="*" element={<Default />} />
        </Routes>
    )
}