export default {
    name: 'functions',
    title: 'Quick Functions',
    type: 'document',

    fields: [
        {
            name: 'fileName',
            title: 'File Name',
            type: 'string',
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
        },
    ],
};
