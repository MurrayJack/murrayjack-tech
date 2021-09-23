export default {
    name: 'positionDetails',
    title: 'Position Details',
    type: 'document',
    fieldsets: [],
    fields: [{
            name: 'jobTitle',
            title: 'Job Title',
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
            name: 'jobPoints',
            title: 'Job Points',
            type: 'array',
            of: [{
                type: 'text'
            }],
        },
    ]
}