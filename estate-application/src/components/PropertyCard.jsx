function PropertyCard({ property, onView, onAddFavourite, isFavourite }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', property.id);
    event.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <article
      className="property-card"
      draggable
      onDragStart={handleDragStart}
    >
      <img
        src={property.thumbnail}
        alt={property.shortDescription}
        className="property-image"
      />
      <div className="property-content">
        <h3 className="property-title">
          {property.type} in {property.postcodeArea}
        </h3>
        <p className="property-location">{property.location}</p>
        <p className="property-price">
          £{property.price.toLocaleString('en-GB')}
        </p>
        <p className="property-meta">
          {property.bedrooms} bedrooms • {property.tenure}
        </p>
        <p className="property-description">{property.shortDescription}</p>
        <div className="property-actions">
          <button type="button" onClick={() => onView(property.id)}>
            View details
          </button>
          <button
            type="button"
            className={isFavourite ? 'secondary' : ''}
            onClick={() => onAddFavourite(property.id)}
          >
            {isFavourite ? 'In favourites' : 'Add to favourites'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;

