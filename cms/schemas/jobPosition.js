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
            name: 'startDate',
            title: 'Start Date',
            type: 'string'
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'companyName'
        }
    }
}

