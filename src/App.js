import React from 'react';
import ReactDOM from 'react-dom';
import { MDXProvider } from '@mdx-js/react';
import { Layout } from './components/Layout';
import { lib } from './components/md-lib';
import { AppConfigContextProvider } from './context/app-config-context';

import './styles/output.css';
import { BrowserRouter } from 'react-router-dom';

const mdxComponents = {
    ...lib
};

const App = ({ config }) => {
    return (
        <BrowserRouter>
            <AppConfigContextProvider config={config}>
                <MDXProvider components={mdxComponents} >
                    <Layout />
                </MDXProvider>
            </AppConfigContextProvider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App config={window.config} />, document.getElementById('__root'));
