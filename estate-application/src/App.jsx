import { useState } from 'react';
import './App.css';
import { properties as allProperties } from './data/properties';
import { addFavourite, clearFavourites, filterProperties, removeFavourite } from './utils/search';
import SearchForm from './components/SearchForm';
import PropertyCard from './components/PropertyCard';
import FavouritesList from './components/FavouritesList';
import PropertyDetails from './components/PropertyDetails';

function App() {
  // Search criteria controlled by the SearchForm
  const [criteria, setCriteria] = useState({
    type: 'Any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    postcodeArea: '',
    fromDate: '',
    toDate: '',
  });

  // Stores property IDs that the user has favourited
  const [favourites, setFavourites] = useState([]);

  // switches from the list view to the details view when set
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  // Convert date inputs into  objects
  const parseDate = (value) => (value ? new Date(value) : null);

  // Normalise criteria so filtering logic is easier and consistent
  const parsedCriteria = {
    type: criteria.type,
    minPrice: criteria.minPrice === '' ? null : criteria.minPrice,
    maxPrice: criteria.maxPrice === '' ? null : criteria.maxPrice,
    minBedrooms: criteria.minBedrooms === '' ? null : criteria.minBedrooms,
    maxBedrooms: criteria.maxBedrooms === '' ? null : criteria.maxBedrooms,
    postcodeArea: criteria.postcodeArea,
    fromDate: parseDate(criteria.fromDate),
    toDate: parseDate(criteria.toDate),
  };

  // Apply all filters to the full property list
  const filtered = filterProperties(allProperties, parsedCriteria);

  // Favourite handlers keep state updates predictable and clean
  const handleAddFavourite = (propertyId) => {
    setFavourites((current) => addFavourite(current, propertyId));
  };

  const handleRemoveFavourite = (propertyId) => {
    setFavourites((current) => removeFavourite(current, propertyId));
  };

  const handleClearFavourites = () => {
    setFavourites(clearFavourites());
  };

  // Switch to the property details page
  const handleViewProperty = (id) => {
    setSelectedPropertyId(id);
  };

   // Return from details view back to search/results
  const handleBackToSearch = () => {
    setSelectedPropertyId(null);
  };

  // If a property is selected, render the details page instead of the list
  if (selectedPropertyId) {
    const property = allProperties.find((p) => p.id === selectedPropertyId);

    // Safety check in case the ID is invalid
    if (!property) {
      return (
        <div className="app">
          <p>Property not found.</p>
          <button type="button" onClick={handleBackToSearch}>
            Back to search
          </button>
        </div>
      );
    }

    const isFavourite = favourites.includes(property.id);

    return (
      <div className="app">
        <PropertyDetails
          property={property}
          onBack={handleBackToSearch}
          onToggleFavourite={() =>
            setFavourites((current) =>
              current.includes(property.id)
                ? removeFavourite(current, property.id)
                : addFavourite(current, property.id),
            )
          }
          isFavourite={isFavourite}
        />
      </div>
    );
  }

  // Default view: search form, results list, and favourites panel
  return (
    <div className="app">
      <header className="site-header">
        <h1> Sri Lankan Estates </h1>
        <p className="tagline">
          Search houses and flats for sale across Sri Lanka.
        </p>
      </header>
      <main className="layout">
        <section className="search-and-results">
          {/* Search controls */}
          <SearchForm criteria={criteria} onChange={setCriteria} />

          {/* Results section */}
          <section className="results">
            <h2 className="section-title">
              Results ({filtered.length} of {allProperties.length})
            </h2>
            {filtered.length === 0 ? (
              <p className="empty-state">
                No properties match your criteria. Try widening your search.
              </p>
            ) : (
              <div className="results-grid">
                {filtered.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onView={handleViewProperty}
                    onAddFavourite={handleAddFavourite}
                    isFavourite={favourites.includes(property.id)}
                  />
                ))}
              </div>
            )}
          </section>
        </section>

        {/* Sidebar showing favourited properties */}
        <FavouritesList
          properties={allProperties}
          favourites={favourites}
          onRemoveFavourite={handleRemoveFavourite}
          onClear={handleClearFavourites}
          onDropAdd={handleAddFavourite}
          onView={handleViewProperty}
        />
      </main>
    </div>
  );
}

export default App;
