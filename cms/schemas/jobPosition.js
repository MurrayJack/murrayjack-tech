export default {
    name: 'jobposition',
    title: 'Job Position',
    type: 'document',
    fieldsets: [{
            name: "generalInfo",
            title: "General Info",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: "technology",
            title: "Technology",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: "positionDetails",
            title: "Position Details",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: "obsolete",
            title: "Obsolete",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
    fields: [{
            name: 'companyName',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'tagLine',
            title: 'Tag Line',
            type: 'text'
        },
        {
            name: 'positions',
            title: 'Positions',
            type: 'array',
            of: [{
                type: 'positionDetails'
            }],
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: "generalInfo",
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            fieldset: "generalInfo",
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            fieldset: "generalInfo",
        },
        {
            name: 'locationUrl',
            title: 'Location URL',
            type: 'url',
            fieldset: "generalInfo",
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            fieldset: "generalInfo",
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            fieldset: "generalInfo",
        },
        {
            name: 'techStack2',
            title: 'Tech Stack',
            type: 'array',
            of: [{
                type: 'techStack'
            }],
            fieldset: "technology",
        },

        {
            name: 'jobPoints',
            title: 'Job Points',
            type: 'array',
            of: [{
                type: 'text'
            }],
            fieldset: "positionDetails"
        },

        {
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{
                type: 'string'
            }],
            fieldset: "obsolete",
        },
        {
            name: 'useNewTechStack',
            title: 'New Tech-stack?',
            type: 'boolean',
            fieldset: "obsolete",
        },
    ],
    orderings: [{
        title: 'Start Date',
        name: 'startDateDesc',
        by: [{
            field: 'startDate.utc',
            direction: 'desc'
        }]
    }, ],
    preview: {
        select: {
            title: 'companyName'
        }
    }
}