import { Category } from './types';

export const categories: Category[] = [
  // ... existing categories remain the same ...

  {
    id: "north-american-folk",
    name: "North American Folk",
    description: "Traditional music from indigenous peoples and settler communities of North America",
    region: "North America",
    image: "https://images.unsplash.com/photo-1519064438923-de4d8acfa4d6",
    subcategories: [
      {
        id: "native-american",
        name: "Native American Music",
        description: "Traditional music of indigenous peoples",
        styles: [
          {
            id: "powwow-songs",
            name: "Powwow Songs",
            description: "Social dance songs performed at gatherings",
            songs: []
          },
          {
            id: "ceremonial-chants",
            name: "Ceremonial Chants",
            description: "Spiritual songs used in rituals and ceremonies",
            songs: []
          }
        ]
      },
      {
        id: "appalachian",
        name: "Appalachian Folk",
        description: "Traditional music from the Appalachian region",
        styles: [
          {
            id: "old-time",
            name: "Old-Time Music",
            description: "String band music from the Appalachian mountains",
            songs: []
          },
          {
            id: "bluegrass",
            name: "Bluegrass",
            description: "High-energy acoustic music with vocal harmonies",
            songs: []
          }
        ]
      },
      {
        id: "canadian-folk",
        name: "Canadian Folk",
        description: "Traditional music from Canadian regions",
        styles: [
          {
            id: "inuit",
            name: "Inuit Throat Singing",
            description: "Traditional vocal games of the Inuit people",
            songs: []
          },
          {
            id: "quebecois",
            name: "Québécois Folk",
            description: "Traditional French-Canadian music",
            songs: []
          }
        ]
      }
    ]
  },
  {
    id: "south-american-folk",
    name: "South American Folk",
    description: "Rich musical traditions from across South America",
    region: "South America",
    image: "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d",
    subcategories: [
      {
        id: "andean-music",
        name: "Andean Music",
        description: "Traditional music from the Andes mountains",
        styles: [
          {
            id: "huayno",
            name: "Huayno",
            description: "Indigenous Quechua music with Spanish influences",
            songs: []
          },
          {
            id: "sikuri",
            name: "Sikuri",
            description: "Panpipe ensemble music",
            songs: []
          }
        ]
      },
      {
        id: "brazilian-folk",
        name: "Brazilian Folk",
        description: "Traditional Brazilian music styles",
        styles: [
          {
            id: "samba",
            name: "Samba",
            description: "Rhythmic music with African roots",
            songs: []
          },
          {
            id: "forro",
            name: "Forró",
            description: "Traditional northeastern Brazilian dance music",
            songs: []
          }
        ]
      },
      {
        id: "argentine-folk",
        name: "Argentine Folk",
        description: "Traditional Argentine music styles",
        styles: [
          {
            id: "chacarera",
            name: "Chacarera",
            description: "Folk music and dance from rural Argentina",
            songs: []
          },
          {
            id: "zamba",
            name: "Zamba",
            description: "Traditional Argentine courtship dance music",
            songs: []
          }
        ]
      }
    ]
  },
  {
    id: "oceanian-folk",
    name: "Oceanian Folk",
    description: "Traditional music from the Pacific Islands and Australasia",
    region: "Oceania",
    image: "https://images.unsplash.com/photo-1578559284795-c9f77e5df1c9",
    subcategories: [
      {
        id: "aboriginal",
        name: "Aboriginal Music",
        description: "Traditional music of Indigenous Australians",
        styles: [
          {
            id: "songlines",
            name: "Songlines",
            description: "Traditional songs mapping the landscape",
            songs: []
          },
          {
            id: "didgeridoo",
            name: "Didgeridoo Music",
            description: "Traditional wind instrument music",
            songs: []
          }
        ]
      },
      {
        id: "maori",
        name: "Māori Music",
        description: "Traditional music of New Zealand's Māori people",
        styles: [
          {
            id: "waiata",
            name: "Waiata",
            description: "Traditional Māori songs and chants",
            songs: []
          },
          {
            id: "haka",
            name: "Haka",
            description: "Ceremonial dance and chanting",
            songs: []
          }
        ]
      },
      {
        id: "pacific-islands",
        name: "Pacific Islands",
        description: "Traditional music from Pacific Island nations",
        styles: [
          {
            id: "polynesian-chants",
            name: "Polynesian Chants",
            description: "Traditional chants from Polynesian cultures",
            songs: []
          },
          {
            id: "slack-key",
            name: "Slack-Key Guitar",
            description: "Hawaiian guitar style with unique tunings",
            songs: []
          }
        ]
      }
    ]
  }
];

// Helper functions remain the same
export function getAllCategories() {
  return categories;
}

export function getCategoryById(id: string) {
  return categories.find(category => category.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string) {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
}

export function searchCategories(query: string) {
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