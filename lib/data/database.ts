// First, let's add more categories to the database

database.categories.push(
  // Asian Folk Categories
  {
    id: "east-asian-folk",
    name: "East Asian Folk",
    description: "Traditional music from East Asian cultures",
    region: "East Asia",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
    culturalContext: {
      history: "East Asian folk music traditions span thousands of years...",
      significance: "These traditions are deeply intertwined with cultural practices...",
      traditions: [
        "Court music",
        "Religious ceremonies",
        "Folk festivals",
        "Traditional theater"
      ],
      instruments: [
        {
          name: "Shamisen",
          description: "A three-stringed traditional Japanese lute",
          origin: "Japan",
          type: "String",
          image: "https://example.com/shamisen.jpg"
        }
      ],
      socialContext: "Music plays a vital role in social cohesion and cultural identity...",
      modernInfluence: "These traditions continue to influence modern Asian music..."
    },
    subcategories: [
      {
        id: "minyo",
        name: "Min'yō",
        description: "Traditional Japanese folk songs",
        region: "Japan",
        culturalContext: "Work songs and festival music from various regions of Japan...",
        instruments: [
          {
            name: "Shamisen",
            description: "Three-stringed lute",
            origin: "Japan",
            type: "String",
            image: "https://example.com/shamisen.jpg"
          }
        ],
        characteristics: [
          "Regional variations",
          "Work-related themes",
          "Festival music"
        ],
        historicalPeriod: "Edo period to present",
        songs: [],
        relatedStyles: ["Enka", "Nagauta"]
      }
      // Add more subcategories...
    ]
  },

  // European Folk Categories
  {
    id: "northern-european-folk",
    name: "Northern European Folk",
    description: "Traditional music from Northern European cultures",
    region: "Northern Europe",
    image: "https://images.unsplash.com/photo-1528728935509-22fb14722a30",
    culturalContext: {
      history: "Northern European folk music reflects ancient traditions...",
      significance: "These traditions preserve cultural identity and history...",
      traditions: [
        "Ballad singing",
        "Dance music",
        "Maritime songs",
        "Epic poetry"
      ],
      instruments: [
        {
          name: "Fiddle",
          description: "Traditional folk violin",
          origin: "Various regions",
          type: "String",
          image: "https://example.com/fiddle.jpg"
        }
      ],
      socialContext: "Folk music served as both entertainment and historical record...",
      modernInfluence: "These traditions continue to influence modern folk revival..."
    },
    subcategories: [
      {
        id: "british-ballads",
        name: "British Ballads",
        description: "Narrative songs from the British Isles",
        region: "British Isles",
        culturalContext: "Traditional storytelling through song...",
        instruments: [
          {
            name: "Fiddle",
            description: "Traditional folk violin",
            origin: "British Isles",
            type: "String",
            image: "https://example.com/fiddle.jpg"
          }
        ],
        characteristics: [
          "Narrative structure",
          "Historical themes",
          "Modal melodies"
        ],
        historicalPeriod: "Medieval to present",
        songs: [],
        relatedStyles: ["Sea Shanties", "Morris Dance Music"]
      }
      // Add more subcategories...
    ]
  }
);

// Add more categories following the same pattern...

// Helper functions remain the same...

export default database;