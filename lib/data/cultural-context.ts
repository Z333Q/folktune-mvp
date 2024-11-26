// Add cultural context for new categories

export const culturalContext = {
  // Existing contexts...

  categories: {
    "east-asian-folk": {
      history: "East Asian folk music traditions have evolved over thousands of years...",
      significance: "These musical traditions are deeply integrated with daily life...",
      instruments: [
        {
          name: "Shamisen",
          description: "A three-stringed lute used in Japanese folk music",
          origin: "Japan",
          type: "String"
        },
        {
          name: "Erhu",
          description: "A two-stringed bowed instrument from China",
          origin: "China",
          type: "String"
        }
      ],
      traditions: [
        "Festival music",
        "Work songs",
        "Religious ceremonies",
        "Theater accompaniment"
      ]
    },

    "northern-european-folk": {
      history: "Northern European folk music preserves ancient traditions...",
      significance: "These songs often tell historical stories and preserve cultural memory...",
      instruments: [
        {
          name: "Fiddle",
          description: "Traditional folk violin used throughout Northern Europe",
          origin: "Various regions",
          type: "String"
        },
        {
          name: "Hardanger Fiddle",
          description: "Traditional Norwegian fiddle with sympathetic strings",
          origin: "Norway",
          type: "String"
        }
      ],
      traditions: [
        "Ballad singing",
        "Dance music",
        "Wedding ceremonies",
        "Seasonal celebrations"
      ]
    }
  }
};

// Helper functions remain the same...