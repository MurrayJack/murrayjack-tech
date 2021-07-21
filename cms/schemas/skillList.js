export default {
    name: 'skillList',
    title: 'Skill List',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'detail',
            type: 'array',
            fieldset: 'skills',
            of: [
                {
                    type: 'string',
                },
            ],
        },
    ],
}

