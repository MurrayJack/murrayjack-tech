export default {
    name: "tournament",
    title: "Tournament",
    type: "document",

    fieldsets: [{
            name: "images",
            title: "Image",
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
            name: "complete",
            title: "Complete",
            type: "boolean",
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
            },
        },
        {
            name: "isWasTHR",
            title: "Was THR",
            type: "boolean",
            fieldset: "details",
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
        {
            title: 'Name',
            name: 'nameOrder',
            by: [
                { field: 'name', direction: 'asc' }
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