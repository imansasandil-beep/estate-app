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

export const properties = [
  {
    id: 'prop1',
    type: 'House',
    bedrooms: 3,
    price: 750000,
    tenure: 'Freehold',
    shortDescription:
      'Attractive three bedroom semi-detached family home close to Petts Wood station and local amenities.',
    longDescription:
      'Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises two receptions, fitted 18\'9 x 10\'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior.',
    location: 'Petts Wood Road, Petts Wood, Orpington BR5',
    postcodeArea: 'BR5',
    pictures: [
      '/images/prop1pic1large.jpg',
      '/images/prop1pic2.jpg',
      '/images/prop1pic3.jpg',
      '/images/prop1pic4.jpg',
      '/images/prop1pic5.jpg',
      '/images/prop1pic6.jpg',
      '/images/prop1pic7.jpg',
      '/images/prop1pic8.jpg',
    ],
    thumbnail: '/images/prop1pic1small.jpg',
    floorplan: '/images/prop1-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Petts+Wood+Road,+Petts+Wood,+Orpington+BR5&output=embed',
    added: toDate({ month: 'October', day: 12, year: 2022 }),
  },
  {
    id: 'prop2',
    type: 'Flat',
    bedrooms: 2,
    price: 399995,
    tenure: 'Freehold',
    shortDescription:
      'Modern two bedroom, two bathroom garden flat with open-plan living and private courtyard.',
    longDescription:
      'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine.',
    location: 'Crofton Road, Orpington BR6',
    postcodeArea: 'BR6',
    pictures: [
      '/images/prop2pic1large.jpg',
      '/images/prop2pic2.jpg',
      '/images/prop2pic3.jpg',
      '/images/prop2pic4.jpg',
      '/images/prop2pic5.jpg',
      '/images/prop2pic6.jpg',
      '/images/prop2pic7.jpg',
      '/images/prop2pic8.jpg',
    ],
    thumbnail: '/images/prop2pic1small.jpg',
    floorplan: '/images/prop2-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Crofton+Road,+Orpington+BR6&output=embed',
    added: toDate({ month: 'September', day: 14, year: 2022 }),
  },
  {
    id: 'prop3',
    type: 'House',
    bedrooms: 4,
    price: 950000,
    tenure: 'Freehold',
    shortDescription:
      'Spacious four bedroom detached family home with large garden and driveway.',
    longDescription:
      'A beautifully presented four bedroom detached house located in a quiet residential cul-de-sac.',
    location: 'Oak Avenue, Bromley BR1',
    postcodeArea: 'BR1',
    pictures: [
      '/images/prop3pic1.jpg',
      '/images/prop3pic2.jpg',
      '/images/prop3pic3.jpg',
      '/images/prop3pic4.jpg',
      '/images/prop3pic5.jpg',
      '/images/prop3pic6.jpg',
      '/images/prop3pic7.jpg',
      '/images/prop3pic8.jpg',
    ],
    thumbnail: '/images/prop3pic1small.jpg',
    floorplan: '/images/prop3-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Oak+Avenue,+Bromley+BR1&output=embed',
    added: toDate({ month: 'January', day: 5, year: 2023 }),
  },
  {
    id: 'prop4',
    type: 'Flat',
    bedrooms: 1,
    price: 275000,
    tenure: 'Leasehold',
    shortDescription:
      'Bright one bedroom flat ideal for first-time buyers, moments from the station.',
    longDescription:
      'This bright and airy one bedroom flat is located on the third floor of a modern purpose built block.',
    location: 'Station Road, Beckenham BR3',
    postcodeArea: 'BR3',
    pictures: [
      '/images/prop4pic1.jpg',
      '/images/prop4pic2.jpg',
      '/images/prop4pic3.jpg',
      '/images/prop4pic4.jpg',
      '/images/prop4pic5.jpg',
      '/images/prop4pic6.jpg',
      '/images/prop4pic7.jpg',
      '/images/prop4pic8.jpg',
    ],
    thumbnail: '/images/prop4pic1small.jpg',
    floorplan: '/images/prop4-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Station+Road,+Beckenham+BR3&output=embed',
    added: toDate({ month: 'March', day: 20, year: 2023 }),
  },
  {
    id: 'prop5',
    type: 'House',
    bedrooms: 5,
    price: 1250000,
    tenure: 'Freehold',
    shortDescription:
      'Substantial five bedroom period property with original features and spacious rooms.',
    longDescription:
      'A substantial five bedroom period property arranged over three floors.',
    location: 'Victoria Road, Chislehurst BR7',
    postcodeArea: 'BR7',
    pictures: [
      '/images/prop5pic1.jpg',
      '/images/prop5pic2.jpg',
      '/images/prop5pic3.jpg',
      '/images/prop5pic4.jpg',
      '/images/prop5pic5.jpg',
      '/images/prop5pic6.jpg',
      '/images/prop5pic7.jpg',
      '/images/prop5pic8.jpg',
    ],
    thumbnail: '/images/prop5pic1small.jpg',
    floorplan: '/images/prop5-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Victoria+Road,+Chislehurst+BR7&output=embed',
    added: toDate({ month: 'July', day: 11, year: 2023 }),
  },
  {
    id: 'prop6',
    type: 'Flat',
    bedrooms: 3,
    price: 550000,
    tenure: 'Leasehold',
    shortDescription:
      'Three bedroom split-level maisonette with balcony and allocated parking.',
    longDescription:
      'A well presented three bedroom split-level maisonette.',
    location: 'High Street, Orpington BR6',
    postcodeArea: 'BR6',
    pictures: [
      '/images/prop6pic1.jpg',
      '/images/prop6pic2.jpg',
      '/images/prop6pic3.jpg',
      '/images/prop6pic4.jpg',
      '/images/prop6pic5.jpg',
      '/images/prop6pic6.jpg',
      '/images/prop6pic7.jpg',
      '/images/prop6pic8.jpg',
    ],
    thumbnail: '/images/prop6pic1small.jpg',
    floorplan: '/images/prop6-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=High+Street,+Orpington+BR6&output=embed',
    added: toDate({ month: 'November', day: 2, year: 2024 }),
  },
  {
    id: 'prop7',
    type: 'House',
    bedrooms: 2,
    price: 425000,
    tenure: 'Freehold',
    shortDescription:
      'Charming two bedroom cottage with courtyard garden and modern kitchen.',
    longDescription:
      'A charming two bedroom terraced cottage located in a quiet backwater.',
    location: 'Church Lane, Bromley BR2',
    postcodeArea: 'BR2',
    pictures: [
      '/images/prop7pic1.jpg',
      '/images/prop7pic2.jpg',
      '/images/prop7pic3.jpg',
      '/images/prop7pic4.jpg',
      '/images/prop7pic5.jpg',
      '/images/prop7pic6.jpg',
      '/images/prop7pic7.jpg',
      '/images/prop7pic8.jpg',
    ],
    thumbnail: '/images/prop7pic1small.jpg',
    floorplan: '/images/prop7-floorplan.jpg',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Church+Lane,+Bromley+BR2&output=embed',
    added: toDate({ month: 'May', day: 28, year: 2025 }),
  },
];
