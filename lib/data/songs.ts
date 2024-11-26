// Add more songs to the database

export const songs: Song[] = [
  // Existing songs...

  // Add Min'yō songs
  {
    id: "soran-bushi",
    title: "Sōran Bushi",
    artist: "Traditional",
    origin: "Japan",
    year: "Traditional",
    description: "A traditional Japanese fishing song from Hokkaido",
    category: "east-asian-folk",
    subcategory: "minyo",
    culturalContext: "Originally sung by herring fishermen in Hokkaido",
    language: "Japanese",
    themes: ["Work", "Sea", "Community"],
    musicalElements: {
      instruments: ["Taiko", "Shamisen", "Vocals"],
      rhythm: "Traditional Japanese",
      scale: "Min'yō scale"
    },
    difficulty: "Intermediate",
    duration: "3:30"
  },

  // Add British Ballad
  {
    id: "scarborough-fair",
    title: "Scarborough Fair",
    artist: "Traditional",
    origin: "England",
    year: "Traditional",
    description: "A traditional English ballad about impossible tasks and lost love",
    category: "northern-european-folk",
    subcategory: "british-ballads",
    culturalContext: "Medieval English fair and market traditions",
    language: "English",
    themes: ["Love", "Magic", "Medieval life"],
    musicalElements: {
      instruments: ["Voice", "Guitar", "Harpsichord"],
      rhythm: "Compound meter",
      scale: "Dorian mode"
    },
    difficulty: "Beginner",
    duration: "4:20"
  }
];

// Helper functions remain the same...