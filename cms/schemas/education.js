export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
        },
        {
            name: 'visible',
            title: 'Visible',
            type: 'boolean'
        },
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [{
                type: 'educationItem'
            }],
        }
    ]
}