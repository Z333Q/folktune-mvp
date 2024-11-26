import { Category } from './schema';

export const categories: Category[] = [
  {
    id: "african-folk",
    name: "African Folk Music",
    description: "Traditional music from various African regions",
    region: "Africa",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    subcategories: [
      {
        id: "griot-traditions",
        name: "Griot Traditions",
        description: "Storytelling musicians who preserve history through song",
        region: "West Africa",
        culturalContext: "Griots are hereditary musicians who maintain oral histories and genealogies through music",
        songs: []
      },
      {
        id: "highlife",
        name: "Highlife",
        description: "Popular dance music blending traditional rhythms with Western instruments",
        region: "West Africa",
        culturalContext: "Developed in Ghana in the early 20th century, combining local melodies with Western instruments",
        songs: []
      }
    ],
    culturalContext: {
      history: "African folk music traditions span thousands of years...",
      significance: "Music plays a central role in African social life...",
      instruments: [
        {
          name: "Kora",
          description: "21-string bridge-harp used by griots"
        },
        {
          name: "Talking Drum",
          description: "Hour-glass shaped drum that can mimic speech tones"
        }
      ],
      traditions: [
        "Oral history preservation",
        "Ceremonial music",
        "Social commentary",
        "Dance traditions"
      ]
    }
  }
  // Additional categories would be added here...
];

// Helper functions
export function getCategoryById(id: string): Category | undefined {
  return categories.find(category => category.id === id);
}

export function searchCategories(query: string): Category[] {
  const normalizedQuery = query.toLowerCase();
  return categories.filter(category =>
    category.name.toLowerCase().includes(normalizedQuery) ||
    category.description.toLowerCase().includes(normalizedQuery) ||
    category.subcategories.some(sub =>
      sub.name.toLowerCase().includes(normalizedQuery) ||
      sub.description.toLowerCase().includes(normalizedQuery)
    )
  );
}