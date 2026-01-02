function PropertyCard({ property, onView, onAddFavourite, isFavourite }) {
    // Starts a drag action so the property can be added to favourites
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
        {/* Property thumbnail */}
      <img
        src={property.thumbnail}
        alt={property.shortDescription}
        className="property-image"
      />
      <div className="property-content">
        {/* Main property title */}
        <h3 className="property-title">
          {property.type} in {property.postcodeArea}
        </h3>

        {/* Location and price info */}
        <p className="property-location">{property.location}</p>
        <p className="property-price">
          Rs.{property.price.toLocaleString('en-GB')}
        </p>

        {/* Extra details shown at a glance */}
        <p className="property-meta">
          {property.bedrooms} bedrooms • {property.tenure}
        </p>

        {/* Short description preview */}
        <p className="property-description">{property.shortDescription}</p>

        {/* Action buttons */}
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

