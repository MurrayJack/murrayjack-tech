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
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'visa',
            title: 'Visa',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'workBlurb',
            title: 'Work Blurb',
            type: 'text'
        },
        {
            name: 'personalBlurb',
            title: 'Personal Blurb',
            type: 'text'
        },
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
}

