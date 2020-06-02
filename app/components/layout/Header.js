import React from 'react';
import { css } from 'emotion';

const headerStyles = css`
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
        font-size: 2.75rem;
        line-height: 1.75;
        margin-top: 0;
        z-index: 1;
    }
    .code {
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 0;
        font-size: 11rem;
        color: #3e444e;
        z-index: 0;
    }
`;

const Header = () => (
    <header className={headerStyles}>
        <h1>
            Hi, <br />
            I am Aman K Saini <br />
            Front End Software Engineer
        </h1>
        <div className="code">{'{...}'}</div>
    </header>
);

export default Header;
