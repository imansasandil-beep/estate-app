import { useState } from 'react';
import './App.css';
import { properties as allProperties } from './data/properties';
import { addFavourite, clearFavourites, filterProperties, removeFavourite } from './utils/search';
import SearchForm from './components/SearchForm';
import PropertyCard from './components/PropertyCard';
import FavouritesList from './components/FavouritesList';
import PropertyDetails from './components/PropertyDetails';

function App() {
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
  const [favourites, setFavourites] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const parseDate = (value) => (value ? new Date(value) : null);
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

  const filtered = filterProperties(allProperties, parsedCriteria);

  const handleAddFavourite = (propertyId) => {
    setFavourites((current) => addFavourite(current, propertyId));
  };

  const handleRemoveFavourite = (propertyId) => {
    setFavourites((current) => removeFavourite(current, propertyId));
  };

  const handleClearFavourites = () => {
    setFavourites(clearFavourites());
  };

  const handleViewProperty = (id) => {
    setSelectedPropertyId(id);
  };

  const handleBackToSearch = () => {
    setSelectedPropertyId(null);
  };

  if (selectedPropertyId) {
    const property = allProperties.find((p) => p.id === selectedPropertyId);
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

  return (
    <div className="app">
      <header className="site-header">
        <h1>Westminster Estates</h1>
        <p className="tagline">
          Search houses and flats for sale across Bromley and Orpington.
        </p>
      </header>
      <main className="layout">
        <section className="search-and-results">
          <SearchForm criteria={criteria} onChange={setCriteria} />
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
