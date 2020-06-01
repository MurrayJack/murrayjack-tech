export default {
    name: "league",
    title: "Leagues",
    type: "document",
    fields: [{
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "abb",
            title: "Abbreviation",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        
    ],
    preview: {
        select: {
            title: "name",
            media: "image"
        },
    },
};