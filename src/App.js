import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout';
import { MDXProvider } from '@mdx-js/react';
import './styles/styles.css';

const mdxComponents = {
    h1: ({children}) => <h1 className="text-2xl">{children}</h1>
};

const App = () => {
    return (
        <MDXProvider components={mdxComponents} >
            <Layout />
        </MDXProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('__root'));
