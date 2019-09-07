export default {
    name: 'jobposition',
    title: 'Job Position',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'locationUrl',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date'
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date'
        },
        {
            name: 'techStack',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'tagLine',
            title: 'Tag Line',
            type: 'text'
        },
        {
            name: 'jobPoints',
            title: 'Job Points',
            type: 'array',
            of: [{ type: 'text' }]
        },
    ],
    orderings: [
        {
            title: 'Start Date',
            name: 'startDateDesc',
            by: [
                { field: 'startDate.utc', direction: 'desc' }
            ]
        },
    ],
    preview: {
        select: {
            title: 'companyName'
        }
    }
}

