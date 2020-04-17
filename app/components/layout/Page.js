import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'emotion';

const pageStyles = css`
    background-color: #3f51b5;
    width: 60rem;
    max-width: 100%;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    padding: 2.5rem 1.25rem;
    flex-direction: column;
    min-height: calc(100vh - 5rem);
    color: #fff;
`;

const Page = ({ children }) => (
    <div className={pageStyles}>{children}</div>
);

Page.propTypes = {
    children: PropTypes.element
}


export default Page;
