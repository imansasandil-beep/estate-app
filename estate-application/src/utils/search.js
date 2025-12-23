export function matchesPrice(property, minPrice, maxPrice) {
  const { price } = property;
  if (minPrice != null && price < minPrice) return false;
  if (maxPrice != null && price > maxPrice) return false;
  return true;
}

export function matchesBedrooms(property, minBedrooms, maxBedrooms) {
    const {bedrooms} = property;
    if (minBedrooms != null && bedrooms < minBedrooms) return false;
    if (maxBedrooms != null && bedroom > maxBedrooms) return false;
    return true;
}

export function matchType(property,type){
    if (!type || type === 'Any') return true;
    return property.type.toLowerCase() === type.toLowerCase()
}

export function matchesPostcode(property, postcodeArea) {
  if (!postcodeArea) return true;
  return (
    property.postcodeArea.toLowerCase() === postcodeArea.trim().toLowerCase()
  );
}

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

export function addFavourite(favourites, propertyID){
  if(favourites.includes(propertyID)){
    return favourites;
  }
  return [...favourites,propertyID];
}

export function removeFavourite(favourites, propertyID){
    return favourites.filter((id) => id !== propertyID);
}

export function clearFavourites(){
    return [];
}