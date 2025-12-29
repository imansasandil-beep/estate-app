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

    test("Rejects above maximum", () => {expect(matchesPrice(sampleProperty,400000,450000)).toBe(false)})
}
);

describe("Bedroom matching", () => {
  test("Accept within bedroom range", () =>{expect(matchesBedrooms(sampleProperty,2,5)).toBe(true)})

  test("Rejects below minimum bedrooms" ,() => {expect(matchesBedrooms(sampleProperty,4,6)).toBe(false)})

  test("Rejects above maximum" ,() => {expect(matchesBedrooms(sampleProperty,null,2)).toBe(false)})
});

describe("Type and postcode matching", () => {
  test("Matches type without case sensitive" ,() => {expect(matchesType(sampleProperty,"House")).toBe(true)})

  test("matches postcode area without case sensitive", () => {expect(matchesPostcode(sampleProperty,"br1")).toBe(true)
})});

describe("Added date matching" ,()=> {
  test("accepts within date range", ()=> {
    const from = new Date(2025,0,1);
    const to = new Date(2025,0,31);
    expect(matchesAddedDate(sampleProperty,from,to)).toBe(true)
  })

  test("rejects before from date", () => {
    const from = new Date(2025,0,20)
    expect(matchesAddedDate(sampleProperty,from,null)).toBe(false)
  })
})

describe("FilterProperties" , () => {const anotherProperty = {
  ...sampleProperty,
  id : 'p2',
  type : 'Flat',
  bedrooms : 1,
  price : 250000,
  postcodeArea : 'BR2'
};

  const properties = [sampleProperty,anotherProperty];

  test("Filter by criteria", () =>{
    const criteria = {type: 'House',
      minPrice: 400000,
      maxPrice: 600000,
      minBedrooms: 2,
      maxBedrooms: 4,
      postcodeArea: 'BR1',
      fromDate: null,
      toDate: null,
    };

    const result = filterProperties(properties, criteria);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('p1');
  });

});

describe('favourites helpers', () => {
  test('addFavourite adds and prevents duplicates', () => {
    const initial = [];
    const once = addFavourite(initial, 'p1');
    const twice = addFavourite(once, 'p1');
    expect(once).toEqual(['p1']);
    expect(twice).toEqual(['p1']);
  });

  test('removeFavourite removes the given id', () => {
    const state = ['p1', 'p2'];
    const updated = removeFavourite(state, 'p1');
    expect(updated).toEqual(['p2']);
  });

  test('clearFavourites returns an empty list', () => {
    const state = ['p1', 'p2'];
    const cleared = clearFavourites(state);
    expect(cleared).toEqual([]);
  });
});