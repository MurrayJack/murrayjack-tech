import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const GoogleAnalyticsContext = React.createContext(undefined);

export const useData = () => React.useContext(GoogleAnalyticsContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const data = useStaticQuery(graphql`
        query AllData {
            allSanityPersonalDetails(filter: { id: { eq: "-0372d9ef-9f39-5ad1-bd3e-b1601eae4713" } }) {
                nodes {
                    name
                    github
                    twitterName
                    blurb
                    keySkills {
                        name
                        detail
                    }
                }
            }
            allSanityJobposition(sort: { fields: startDate, order: DESC }) {
                nodes {
                    companyName
                    tagLine
                    positions {
                        jobTitle
                        startDate
                        endDate
                        jobPoints
                    }
                }
            }
        }
    `);

    return <GoogleAnalyticsContext.Provider value={data}>{children}</GoogleAnalyticsContext.Provider>;
};
