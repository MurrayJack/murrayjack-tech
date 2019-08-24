export default {
    name: 'personalDetails',
    title: 'Personal Details',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
}

