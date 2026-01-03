// Static property data for the estate application.
// In a real app this would come from an API, but here we keep it client-side.

// Helper to create a Date object from year, month name and day
const monthLookup = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const toDate = ({ year, month, day }) =>
  new Date(year, monthLookup[month], day);

// Helper function to get correct image path for GitHub Pages
const getImagePath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const properties = [
  {
    id: 'prop1',
    type: 'House',
    bedrooms: 4,
    price: 68000000,
    tenure: 'Freehold',
    shortDescription:
      'Modern four bedroom luxury house located in a quiet residential area of Nugegoda.',
    longDescription:
      'A beautifully designed four bedroom luxury house situated in a peaceful residential neighborhood in Nugegoda. The property features spacious living and dining areas, a modern pantry kitchen, en-suite bedrooms, and a landscaped garden. Conveniently located close to schools, supermarkets, and main road access.',
    location: 'Pagoda Road, Nugegoda',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop1pic1large.jpg'),
      getImagePath('images/prop1pic2.jpg'),
      getImagePath('images/prop1pic3.jpg'),
      getImagePath('images/prop1pic4.jpg'),
      getImagePath('images/prop1pic5.jpg'),
      getImagePath('images/prop1pic6.jpg'),
      getImagePath('images/prop1pic7.jpg'),
      getImagePath('images/prop1pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop1pic1small.jpg'),
    floorplan: getImagePath('images/prop1-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Pagoda+Road+Nugegoda+Sri+Lanka&output=embed',
    added: toDate({ month: 'October', day: 18, year: 2025 }),
  },
  {
    id: 'prop2',
    type: 'Flat',
    bedrooms: 2,
    price: 42000000,
    tenure: 'Freehold',
    shortDescription:
      'Stylish two bedroom apartment with city views in central Colombo.',
    longDescription:
      'This stylish two bedroom apartment offers open-plan living, a modern fitted kitchen, and stunning city views. Located in the heart of Colombo, the apartment provides easy access to shopping malls, offices, restaurants, and entertainment hubs.',
    location: 'Union Place, Colombo 02',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop2pic1large.jpg'),
      getImagePath('images/prop2pic2.jpg'),
      getImagePath('images/prop2pic3.jpg'),
      getImagePath('images/prop2pic4.jpg'),
      getImagePath('images/prop2pic5.jpg'),
      getImagePath('images/prop2pic6.jpg'),
      getImagePath('images/prop2pic7.jpg'),
      getImagePath('images/prop2pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop2pic1small.jpg'),
    floorplan: getImagePath('images/prop2-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Union+Place+Colombo+02+Sri+Lanka&output=embed',
    added: toDate({ month: 'September', day: 25, year: 2025 }),
  },
  {
    id: 'prop3',
    type: 'House',
    bedrooms: 5,
    price: 95000000,
    tenure: 'Freehold',
    shortDescription:
      'Spacious five bedroom family home with large garden in Battaramulla.',
    longDescription:
      'A spacious five bedroom family home located in Battaramulla. The property features multiple living areas, a large garden, ample parking, and excellent ventilation. Ideal for families seeking comfort and convenience near government offices and schools.',
    location: 'Koswatta Road, Battaramulla',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop3pic1.jpg'),
      getImagePath('images/prop3pic2.jpg'),
      getImagePath('images/prop3pic3.jpg'),
      getImagePath('images/prop3pic4.jpg'),
      getImagePath('images/prop3pic5.jpg'),
      getImagePath('images/prop3pic6.jpg'),
      getImagePath('images/prop3pic7.jpg'),
      getImagePath('images/prop3pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop3pic1small.jpg'),
    floorplan: getImagePath('images/prop3-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Koswatta+Road+Battaramulla+Sri+Lanka&output=embed',
    added: toDate({ month: 'November', day: 10, year: 2025 }),
  },
  {
    id: 'prop4',
    type: 'Flat',
    bedrooms: 1,
    price: 28500000,
    tenure: 'Freehold',
    shortDescription:
      'Compact one bedroom apartment ideal for professionals in Rajagiriya.',
    longDescription:
      'This well-maintained one bedroom apartment is perfect for professionals and young couples. Located in Rajagiriya, it offers quick access to Colombo city, supermarkets, and restaurants.',
    location: 'Rajagiriya Road, Rajagiriya',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop4pic1.jpg'),
      getImagePath('images/prop4pic2.jpg'),
      getImagePath('images/prop4pic3.jpg'),
      getImagePath('images/prop4pic4.jpg'),
      getImagePath('images/prop4pic5.jpg'),
      getImagePath('images/prop4pic6.jpg'),
      getImagePath('images/prop4pic7.jpg'),
      getImagePath('images/prop4pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop4pic1small.jpg'),
    floorplan: getImagePath('images/prop4-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Rajagiriya+Sri+Lanka&output=embed',
    added: toDate({ month: 'December', day: 3, year: 2025 }),
  },
  {
    id: 'prop5',
    type: 'House',
    bedrooms: 6,
    price: 125000000,
    tenure: 'Freehold',
    shortDescription:
      'Luxury six bedroom villa with swimming pool in Mount Lavinia.',
    longDescription:
      'An exclusive six bedroom luxury villa located in Mount Lavinia. The property features a private swimming pool, spacious entertainment areas, high-end finishes, and close proximity to the beach.',
    location: 'Station Road, Mount Lavinia',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop5pic1.jpg'),
      getImagePath('images/prop5pic2.jpg'),
      getImagePath('images/prop5pic3.jpg'),
      getImagePath('images/prop5pic4.jpg'),
      getImagePath('images/prop5pic5.jpg'),
      getImagePath('images/prop5pic6.jpg'),
      getImagePath('images/prop5pic7.jpg'),
      getImagePath('images/prop5pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop5pic1small.jpg'),
    floorplan: getImagePath('images/prop5-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Mount+Lavinia+Sri+Lanka&output=embed',
    added: toDate({ month: 'October', day: 30, year: 2025 }),
  },
  {
    id: 'prop6',
    type: 'Flat',
    bedrooms: 3,
    price: 52000000,
    tenure: 'Freehold',
    shortDescription:
      'Three bedroom sea-view apartment in Wellawatte.',
    longDescription:
      'A spacious three bedroom apartment offering stunning sea views. Located in Wellawatte, this property provides easy access to public transport, schools, and coastal dining spots.',
    location: 'Marine Drive, Wellawatte',
    postcodeArea: 'Colombo',
    pictures: [
      getImagePath('images/prop6pic1.jpg'),
      getImagePath('images/prop6pic2.jpg'),
      getImagePath('images/prop6pic3.jpg'),
      getImagePath('images/prop6pic4.jpg'),
      getImagePath('images/prop6pic5.jpg'),
      getImagePath('images/prop6pic6.jpg'),
      getImagePath('images/prop6pic7.jpg'),
      getImagePath('images/prop6pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop6pic1small.jpg'),
    floorplan: getImagePath('images/prop6-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Wellawatte+Sri+Lanka&output=embed',
    added: toDate({ month: 'November', day: 22, year: 2025 }),
  },
  {
    id: 'prop7',
    type: 'House',
    bedrooms: 3,
    price: 46000000,
    tenure: 'Freehold',
    shortDescription:
      'Charming three bedroom house in a calm suburb of Kandy.',
    longDescription:
      'A charming three bedroom house located in a serene residential area of Kandy. Surrounded by greenery, the property offers a relaxed lifestyle while being close to the city center.',
    location: 'Peradeniya Road, Kandy',
    postcodeArea: 'Central',
    pictures: [
      getImagePath('images/prop7pic1.jpg'),
      getImagePath('images/prop7pic2.jpg'),
      getImagePath('images/prop7pic3.jpg'),
      getImagePath('images/prop7pic4.jpg'),
      getImagePath('images/prop7pic5.jpg'),
      getImagePath('images/prop7pic6.jpg'),
      getImagePath('images/prop7pic7.jpg'),
      getImagePath('images/prop7pic8.jpg'),
    ],
    thumbnail: getImagePath('images/prop7pic1small.jpg'),
    floorplan: getImagePath('images/prop7-floorplan.jpg'),
    mapEmbedUrl:
      'https://www.google.com/maps?q=Peradeniya+Road+Kandy+Sri+Lanka&output=embed',
    added: toDate({ month: 'December', day: 15, year: 2025 }),
  },
];