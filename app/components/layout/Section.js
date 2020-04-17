import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const sectionStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem
`;

const sectionTitleStyles = css`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #3949AB;
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
`;

const sectionBodyStyles = css``;

const Section = ({ title, content }) => (
    <section className={sectionStyles}>
        <h1 className={sectionTitleStyles}>{title}</h1>
        <div className={sectionBodyStyles}>{content}</div>
    </section>
);

Section.propTypes = {
    title: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired
};

export default Section;
