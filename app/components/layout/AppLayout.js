import React from 'react';
import Header from './Header';
import Page from './Page';
import Section, { SubSeciton } from './Section';

const AppLayout = () => (
  <Page>
    <Header />
    <Section
      title={'Technologies I Use'}
      content={`HTML5, CSS3, JS, jQuery, Angular, React, React Native, AngularJS,
      Knockout.JS, Durandal.JS, Webpack, Rollup.JS, Node.JS, Express.JS,
      Restify.JS, D3.JS, Java, PHP, MongoDB, SQL, GraphQL, MobX, PWA`}
    />

    <Section
      title={'Work Experience'}
      content={(
        <>
          <SubSeciton
            title={'Expedia Group // Software Development Engineer II'}
            content={(
              <ul>
                <li>Leading Front End Development of User Generated Content Group</li>
                <li>Managing and collecting reviews for experiences purchased by users from expedia group applications</li>
              </ul>
            )}
          />
          <SubSeciton
            title={'Cvent Inc // Software Engineer II'}
            content={(
              <ul>
                <li>Developed share-able react & react-native packages to be used by other teams</li>
                <li>Participated on active development of react components for Carina Design System</li>
                <li>Worked on cvent events mobile app using React Native</li>
              </ul>
            )}
          />
          <SubSeciton
            title={'iTuple Technologies Pvt Ltd // Software Engineer'}
            content={(
              <ul>
                <li>Took ownership for UI development of flagship IOT product, Inspectway</li>
                <li>Worked on various Healthcare and Lien Management applications</li>
              </ul>
            )}
          />
          <SubSeciton
            title={'Cognizant // Programmer Analyst'}
            content={(
              <ul>
                <li>Actively worked on UI development (HTML5/CSS3/JS/jQuery) of Life@WorkPortal (Life@Workportal helps US based clients manage DB, DC and HW plans for their employee)</li>
                <li>Took partial ownership in development of HRMS application using MEAN Stack for hiring, attrition, off-boarding and on-boarding of employees</li>
              </ul>
            )}
          />
        </>
      )}
    />

    <Section
      title={'Education'}
      content={(
        <>
          <SubSeciton
            title={'Bachelor of Engineering, Electronics and Communication'}
            content={'Rishiraj Institute of Technology, Indore, MP, India'}
          />
          <SubSeciton
            title={'High School'}
            content={'DAV ACC Public School Kymore, Katni, MP, India'}
          />
        </>
      )}
    />

    <Section
      title={'Get In Touch'}
      content={(
        <section id='social'>
          <div className='LI-profile-badge' data-version='v1' data-size='large' data-locale='en_US' data-type='horizontal' data-theme='dark' data-vanity='thejsguy'><a className='LI-simple-link' href='https://in.linkedin.com/in/thejsguy?trk=profile-badge'>Aman K Saini</a></div>
        </section>
      )}
    />

    <div>
      Built with ❤️ using React
    </div>
  </Page>
);

export default AppLayout;
