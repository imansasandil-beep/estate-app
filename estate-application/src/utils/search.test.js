import {
  addFavourite,
  clearFavourites,
  filterProperties,
  matchesAddedDate,
  matchesBedrooms,
  matchesPostcode,
  matchesPrice,
  matchesType,
  removeFavourite,
} from './search';

const sampleProperty = {
  id: 'p1',
  type: 'House',
  bedrooms: 3,
  price: 500000,
  postcodeArea: 'BR1',
  added: new Date(2025, 0, 15),
};

describe("Price matching", () => {
    test("Accepts within range", () =>{expect(matchesPrice(sampleProperty,400000,600000)).toBe(true);}) 

    test("Rejects below minimum", () => {expect(matchesPrice(sampleProperty,600000,null)).toBe(false);})

    test("Rejects above macimum", () => {expect(matchPrice(sampleProperty,400000,450000)).toBe(false)})
}
);