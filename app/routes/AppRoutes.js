import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Resume } from '../pages/Resume';
import { BlogPage } from '../pages/Blog';
import { BlogReader } from '../pages/BlogReader';

export const ApplicationRoutes = () => (
    <Router>
        <Switch>

            <Route
                path="/blog/:slug"
                component={BlogReader}
            />

            <Route
                path="/blog"
                component={BlogPage}
            />

            <Route
                path="/"
                component={Resume}
            />
        </Switch>
    </Router>
);