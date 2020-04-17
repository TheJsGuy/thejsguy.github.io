import React from 'react';
import Header from './Header';
import Page from './Page';
import Section from './Section';

const AppLayout = () => (
  <Page>
    <Header />
    <Section
      title={"Technologies I Use"}
      content={`HTML5, CSS3, JS, jQuery, Angular, React, React Native, AngularJS,
      Knockout.JS, Durandal.JS, Webpack, Rollup.JS, Node.JS, Express.JS,
      Restify.JS, D3.JS, Java, PHP, MongoDB, SQL, GraphQL, MobX, PWA`}
    />

    <Section
      title={"Get In Touch"}
      content={(
        <section id="social">
          <div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="thejsguy"><a class="LI-simple-link" href='https://in.linkedin.com/in/thejsguy?trk=profile-badge'>Aman K Saini</a></div>
        </section>
      )}
    />
  </Page>
);

export default AppLayout;