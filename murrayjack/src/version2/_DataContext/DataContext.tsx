import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type Data = {
    allSanityPersonalDetails: {
        nodes: {
            name: string;
            github: string;
            twitterName: string;
            blurb: string[];
            location: string;
            email: string;
            keySkills: {
                name: string;
                detail: string[];
            }[];
        }[];
    };

    allSanityJobposition: {
        nodes: {
            companyName: string;
            tagLine: string;
            positions: {
                jobTitle: string;
                startDate: string;
                endDate: string;
                jobPoints: string[];
            }[];
        }[];
    };
};

const GoogleAnalyticsContext = React.createContext<Data>(undefined);

export const useData = () => React.useContext(GoogleAnalyticsContext);

export const DataProvider: FC = ({ children }) => {
    const data = useStaticQuery(graphql`
        query AllData {
            allSanityPersonalDetails(filter: { id: { eq: "-0372d9ef-9f39-5ad1-bd3e-b1601eae4713" } }) {
                nodes {
                    name
                    github
                    twitterName
                    location
                    blurb
                    email
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
                        startDate(formatString: "YYYY")
                        endDate(formatString: "YYYY")
                        jobPoints
                    }
                }
            }
        }
    `);

    return <GoogleAnalyticsContext.Provider value={data}>{children}</GoogleAnalyticsContext.Provider>;
};
