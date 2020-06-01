export default {
    name: "tournament",
    title: "Tournament",
    type: "document",

    fieldsets: [{
            name: "images",
            title: "Images",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: "details",
            title: "Details",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],

    fields: [{
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "date",
            fieldset: "details",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
            fieldset: "details",
        },
        {
            name: "hostLeague",
            title: "Hosting League",
            type: "reference",
            fieldset: "details",
            to: {
                type: 'league'
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            fieldset: "images",
        },

        {
            name: "game",
            title: "Games",
            type: "array",
            of: [{
                type: "game"
            }]
        },
    ],
    orderings: [
        {
            title: 'Date',
            name: 'date',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "date",
            media: "image"
        },
    },
};