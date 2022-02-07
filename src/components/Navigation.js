import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppConfig } from '../context/app-config-context';

const NavItem = ({ link, noLink, children, route, className }) => (
    noLink
        ? <li><a className={`flex w-full px-4 py-2 uppercase text-sm mt-4 ${className || ''}`}>{link.label}</a>{children}</li>
        : <li><NavLink to={route} className={({isActive}) => `flex w-full px-4 py-2 uppercase hover:bg-zinc-400 ${className || ''} ${isActive ? 'bg-zinc-400' : ''}`}>{link.label}</NavLink>{children}</li>

);

export const Navigation = () => {
    const { nav: { links = [] } } = useAppConfig();
    return (
        <>
            <div className="flex py-8 px-4">
                <h1 className="text-2xl font-mono">Hello Github</h1>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <ul className="list-none  w-full mt-2">
                        {links.map(link => {
                            if (!link.children) {
                                return <NavItem key={link.key} link={link} route={link.key} />
                            }
                            return (
                                <React.Fragment key={link.key}>
                                    <NavItem link={link} noLink>
                                        <ul className="list-disc w-full">
                                            {link.children.map(subLink => <NavItem key={subLink.key} link={subLink} route={`${link.key}/${subLink.key}`} className="pl-7" />)}
                                        </ul>
                                    </NavItem>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}