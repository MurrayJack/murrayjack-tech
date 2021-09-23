// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import skillList from "./skillList"
import techStack from "./techStack"
import jobPosition from './jobPosition'
import positionDetails from "./positionDetails"
import socialMedia from './socialMedia'
import personalDetails from "./personalDetails"
import blogFeatureFlags from "./featureFlags"
import education from "./education"
import educationItem from './educationItem'
import projects from "./projects/projects"

import tournament from "./rollerDerby/tournaments"
import game from "./rollerDerby/games";
import league from "./rollerDerby/league";
import derbyInfo from "./rollerDerby/derbyInfo";

import sitePages from "./site/pages";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        educationItem,
        skillList,
        techStack,
        positionDetails,
        jobPosition,
        socialMedia,
        personalDetails,
        blogFeatureFlags,
        education,
        projects,

        tournament,
        game,
        league,
        derbyInfo,

        sitePages
    ])
})