export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'published',
            title: 'Published?',
            type: 'boolean'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
    ],
    
    preview: {
        select: {
            title: 'projectName'
        }
    }
}

