export default {
  name: "game",
  title: "Games",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "homeTeam",
      title: "Home Team",
      type: "string",
    },
    {
      name: "visitingTeam",
      title: "Visiting Team",
      type: "string",
    },
    {
      name: "headRef",
      title: "Head Referee",
      type: "string",
    },
    {
      name: "headNSO",
      title: "Head NSO",
      type: "string",
    },
    {
      name: "association",
      title: "Association",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          {
            title: "WFTDA",
            value: "WFTDA",
          },
          {
            title: "MRDA",
            value: "MRDA",
          },
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          {
            title: "Regulation",
            value: "Reg",
          },
          {
            title: "Champs",
            value: "Champs",
          },
          {
            title: "Playoff",
            value: "Playoff",
          },
          {
            title: "Sanctioned",
            value: "Sanc",
          },
          {
            title: "Other",
            value: "Other",
          },
        ],
      },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          {
            title: "CHR",
            value: "CHR",
          },
          {
            title: "HR",
            value: "HR",
          },
          {
            title: "IPR",
            value: "IPR",
          },
          {
            title: "JR",
            value: "JR",
          },
          {
            title: "OPR",
            value: "OPR",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      home: "homeTeam",
      away: "visitingTeam",
      position: "position",
      name: "name",
    },

    prepare(selection) {
      const { name, home, away, position } = selection;

      return {
        title: `${
          name ? name + ":" : ""
          } ${position}`,
        subtitle: `${home} vs ${away}`,
      };
    },
  },
};
