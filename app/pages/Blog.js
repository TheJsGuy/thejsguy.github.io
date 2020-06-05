import React from 'react';
import Page from '../components/layout/Page';
import Section, { SubSeciton } from '../components/layout/Section';
import { Link } from 'react-router-dom';

export const BlogPage = () => (
    <Page>
        <Section
            title={'Blog'}
            content={(
                <>
                    <p>Some random thoughts and coding experiments</p>
                    <SubSeciton
                        title={(
                            <Link to="/blog/access-control-management-for-front-end-apps">
                                Access Control Management for Front-End Apps
                            </Link>
                        )}
                        content={'WIP'}
                    />
                </>
            )}
        />
    </Page>
);

