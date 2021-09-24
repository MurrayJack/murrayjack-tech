import * as React from 'react';
import Intro from '../components/me/intro';
import Company from '../components/co/company';
import Contact from '../components/me/contact';
import Skills from '../components/me/skills';
import Projects from '../components/me/projects';
import Education from '../components/co/education';
import { Helmet } from 'react-helmet';
import '../components/styles.css';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                blurb
            }
        }
    `);

    return (
        <main>
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <meta charSet="utf-8" />
                <title>Murray Jack: CV</title>
                <meta name="description" content={data.sanityPersonalDetails.blurb[0]} />
            </Helmet>

            {/* <header>
                <div></div>
            </header> */}

            <section>
                <h2>Overview</h2>

                <Intro />

                <h2>Work Experience</h2>

                <Company />

                <h2>Education and Qualifications</h2>

                <Education />
            </section>

            <aside>
                <div style={{ width: '275px' }}>
                    <StaticImage width="275px" height="400px" src="../images/murrayjack.png" alt="Picture of Murray Jack" />
                </div>

                <div>
                    <h1>
                        Murray Jack<span>(he/him)</span>
                    </h1>
                </div>

                <div>
                    <Contact />
                    <Skills />
                    <Projects />
                </div>
            </aside>
        </main>
    );
};

export default IndexPage;
