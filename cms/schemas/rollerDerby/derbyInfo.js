export default {
    name: "derbyInfo",
    title: "Derby Info",
    type: "document",

    fields: [{
            name: "name",
            title: "Official's Legal Name",
            type: "string",
        },
        {
            name: "derbyName",
            title: "Official's Derby Name",
            type: "string",
        },
        {
            name: "officiatingSince",
            title: "Officiating Since",
            type: "date",
        },
        {
            name: "affiliatedLeague",
            title: "Affiliated League",
            type: "reference",
            to: {
                type: 'league'
            },
        },
        {
            name: "provider",
            title: "Provider",
            type: "string",
        },
        {
            name: "insurance",
            title: "Insurance #",
            type: "string",
        },

    ]
}