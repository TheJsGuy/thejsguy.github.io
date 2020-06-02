import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const sectionStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem
`;


const subSectionStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem
`;

const sectionTitleStyles = css`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #3b3c44;
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
`;

const subSectionTitleStyes = css`
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: none;
    display: flex;
    flex-direction: column;
`

const sectionBodyStyles = css`
    flex-direction: column;
`;


const subSectionBodyStyles = css`
    flex-direction: column;
`

const Section = ({ title, content }) => (
    <section className={sectionStyles}>
        <h1 className={sectionTitleStyles}>{title}</h1>
        <div className={sectionBodyStyles}>{content}</div>
    </section>
);

export const SubSeciton = ({ title, content }) => (
    <div className={subSectionStyles}>
        <h2 className={subSectionTitleStyes}>{title}</h2>
        <div className={subSectionBodyStyles}>{content}</div>
    </div>
);


SubSeciton.propTypes = {
    title: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired
};

Section.propTypes = {
    title: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired
};

export default Section;
