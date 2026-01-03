// Import the original JSON file (must be kept unchanged)
import propertiesData from './properties.json';

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

// Transform the imported JSON data
export const properties = propertiesData.map((property) => ({
  ...property,
  // Transform date objects to Date instances
  added: toDate(property.added),
  // Transform image paths
  pictures: property.pictures.map(getImagePath),
  thumbnail: getImagePath(property.thumbnail),
  floorplan: getImagePath(property.floorplan),
}));