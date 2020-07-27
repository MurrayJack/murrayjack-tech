export default {
    name: 'sitePages',
    title: 'Site Pages',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            type: 'string'
        },
        {
            name: 'published',
            title: 'Published?',
            type: 'boolean'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
    ]
}