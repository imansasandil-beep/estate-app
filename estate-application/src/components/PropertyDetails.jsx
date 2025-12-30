import { useState } from 'react';

function PropertyDetails({ property, onBack, onToggleFavourite, isFavourite }) {
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="property-details">
      <button type="button" className="link-button" onClick={onBack}>
        ← Back to search
      </button>
      <header className="property-header">
        <div>
          <h1>
            {property.type} — {property.bedrooms} bedrooms
          </h1>
          <p className="property-location">{property.location}</p>
          <p className="property-price large">
            £{property.price.toLocaleString('en-GB')}
          </p>
          <p className="property-meta">
            {property.tenure} • Added{' '}
            {property.added.toLocaleDateString('en-GB')}
          </p>
        </div>
        <button
          type="button"
          className={isFavourite ? 'secondary' : ''}
          onClick={onToggleFavourite}
        >
          {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        </button>
      </header>

      <section className="gallery">
        <div className="gallery-main">
          <img
            src={property.pictures[activeImageIndex]}
            alt={`${property.type} main view`}
          />
        </div>
        <div className="gallery-thumbnails">
          {property.pictures.map((src, index) => (
            <button
              type="button"
              key={src}
              className={
                index === activeImageIndex
                  ? 'thumbnail-button active'
                  : 'thumbnail-button'
              }
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={src} alt={`${property.type} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      <section className="tabs">
        <div className="tabs-list" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'description'}
            className={activeTab === 'description' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'floorplan'}
            className={activeTab === 'floorplan' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('floorplan')}
          >
            Floor plan
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'map'}
            className={activeTab === 'map' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('map')}
          >
            Map
          </button>
        </div>
        <div className="tabs-panels">
          {activeTab === 'description' && (
            <div className="tab-panel">
              <p>{property.longDescription}</p>
            </div>
          )}
          {activeTab === 'floorplan' && (
            <div className="tab-panel">
              <img
                src={property.floorplan}
                alt={`Floor plan for ${property.location}`}
                className="floorplan-image"
              />
            </div>
          )}
          {activeTab === 'map' && (
            <div className="tab-panel">
              <iframe
                title={`Map for ${property.location}`}
                src={property.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PropertyDetails;