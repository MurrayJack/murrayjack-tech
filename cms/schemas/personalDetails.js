export default {
  name: "personalDetails",
  title: "Personal Details",
  type: "document",

  fieldsets: [
    {
      name: "Obsolete",
      title: "Obsolete",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
        name: "social-media",
        title: "Social Media",
        options: {
          collapsible: true,
          collapsed: true,
        },
      }
  ],

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "visa",
      title: "Visa",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "mobileNo",
      title: "Mobile Number",
      type: "string",
    },
    {
      name: "github",
      title: "GitHub",
      type: "string",
      fieldset: "social-media",
    },
    {
      name: "twitterName",
      title: "Twitter Name",
      type: "string",
      fieldset: "social-media",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      fieldset: "social-media",
    },
    {
      name: "linkedIn",
      title: "Linked In",
      type: "string",
      fieldset: "social-media",
    },
    
    {
        name: "blurb",
        title: "Blurb",
        type: "array",
        of: [{
            type: "text"
        }]
    },

    {
      name: "workBlurb",
      title: "Work Blurb",
      type: "text",
      fieldset: "Obsolete",
    },
    {
      name: "workBlurb2",
      title: "Work Blurb 2",
      type: "text",
      fieldset: "Obsolete",
    },
    {
      name: "personalBlurb",
      title: "Personal Blurb",
      type: "text",
      fieldset: "Obsolete",
    },
    {
      name: "personalBlurb2",
      title: "Personal Blurb 2",
      type: "text",
      fieldset: "Obsolete",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
