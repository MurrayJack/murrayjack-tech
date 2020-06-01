export default {
    name: "official",
    title: "Official Details",
    type: "document",
    fields: [{
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "league",
            title: "League",
            type: "string",
        },
        
    ],
    preview: {
        select: {
            title: "companyName",
        },
    },
};