import * as React from 'react';
import Intro from '../components/me/intro';
import Company from '../components/co/company';
import Contact from '../components/me/contact';
import Skills from '../components/me/skills';
import Projects from '../components/me/projects';
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

            <header>
                <div>
                    <StaticImage width="85px" height="85px" src="../images/murrayjack.png" alt="Picture of Murray Jack" />
                </div>
                <h1>
                    Murray Jack<span>(he/him)</span>
                </h1>
            </header>

            <section>
                <Intro />

                <h2>Work Experience</h2>

                <Company />

                {/* <h2>Education</h2> */}
            </section>

            <aside>
                <Contact />
                <Skills />
                <Projects />
            </aside>
        </main>
    );
};

export default IndexPage;
