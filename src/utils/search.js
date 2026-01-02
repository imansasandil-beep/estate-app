// Checks whether a property price falls within the given range
export function matchesPrice(property, minPrice, maxPrice) {
  const { price } = property;
  if (minPrice != null && price < minPrice) return false;
  if (maxPrice != null && price > maxPrice) return false;
  return true;
}

export function matchesBedrooms(property, minBedrooms, maxBedrooms) {
    const {bedrooms} = property;
    if (minBedrooms != null && bedrooms < minBedrooms) return false;
    if (maxBedrooms != null && bedrooms > maxBedrooms) return false;
    return true;
}

// Matches property type, ignoring case and allowing "Any"
export function matchesType(property,type){
    if (!type || type === 'Any') return true;
    return property.type.toLowerCase() === type.toLowerCase()
}

// Matches property type, ignoring case and allowing "Any"
export function matchesPostcode(property, postcodeArea) {
  if (!postcodeArea) return true;
  return (
    property.postcodeArea.toLowerCase() === postcodeArea.trim().toLowerCase()
  );
}

// Checks whether the property was added within the selected date range
export function matchesAddedDate(property, fromDate, toDate) {
  if (!fromDate && !toDate) return true;
  const addedDate = property.added;
  if (fromDate && addedDate < fromDate) return false;
  if (toDate && addedDate > toDate) return false;
  return true;
}

// Runs all individual checks to return only matching properties
export function filterProperties(properties, criteria) {
  const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, postcodeArea, fromDate, toDate } = criteria;
  return properties.filter((property) => {
    return (
      matchesType(property, type) &&
      matchesPrice(property, minPrice, maxPrice) &&
      matchesBedrooms(property, minBedrooms, maxBedrooms) &&
      matchesPostcode(property, postcodeArea) &&
      matchesAddedDate(property, fromDate, toDate)
    );
  });
}

// Adds a property to favourites if it's not already there
export function addFavourite(favourites, propertyID){
  if(favourites.includes(propertyID)){
    return favourites;
  }
  return [...favourites,propertyID];
}

// Adds a property to favourites if it's not already there
export function removeFavourite(favourites, propertyID){
    return favourites.filter((id) => id !== propertyID);
}

// Clears the entire favourites list
export function clearFavourites(){
    return [];
}