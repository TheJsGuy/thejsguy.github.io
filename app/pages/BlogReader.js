import React from 'react';
import { withRouter } from 'react-router-dom';
import Page from '../components/layout/Page';

export const BlogReader = withRouter(
    ({ match: { params: { slug } } }) => (
        <Page>
            {slug}
        </Page>
    )
);