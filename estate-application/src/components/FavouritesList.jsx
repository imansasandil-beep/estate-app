function FavouritesList({
  properties,
  favourites,
  onRemoveFavourite,
  onClear,
  onDropAdd,
  onView,
}) {
  const favouriteProperties = favourites
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    if (id) {
      onDropAdd(id);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    if (id) {
      onRemoveFavourite(id);
    }
  };

  const handleRemoveDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <aside className="favourites-panel">
      <h2 className="section-title">Favourites</h2>
      <p className="favourites-hint">
        Drag properties here or use the "Add to favourites" button.
      </p>
      <div
        className="favourites-dropzone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {favouriteProperties.length === 0 ? (
          <p className="empty-state">No favourite properties yet.</p>
        ) : (
          <ul className="favourites-list">
            {favouriteProperties.map((property) => (
              <li
                key={property.id}
                className="favourites-item"
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.setData('text/plain', property.id);
                  event.dataTransfer.effectAllowed = 'move';
                }}
              >
                <button
                  type="button"
                  className="link-button"
                  onClick={() => onView(property.id)}
                >
                  {property.type} in {property.postcodeArea} – £
                  {property.price.toLocaleString('en-GB')}
                </button>
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => onRemoveFavourite(property.id)}
                  aria-label="Remove from favourites"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        className="secondary full-width"
        onClick={onClear}
        disabled={favouriteProperties.length === 0}
      >
        Clear favourites
      </button>
      <div
        className="favourites-remove-dropzone"
        onDrop={handleRemoveDrop}
        onDragOver={handleRemoveDragOver}
      >
        Drag here to remove from favourites
      </div>
    </aside>
  );
}

export default FavouritesList;

