function SearchForm({ criteria, onChange }) {
  const handleChange = (field) => (event) => {
    onChange({ ...criteria, [field]: event.target.value });
  };

  const handleNumberChange = (field) => (event) => {
    const value = event.target.value;
    onChange({ ...criteria, [field]: value ? Number(value) : '' });
  };

  const handleDateChange = (field) => (event) => {
    onChange({ ...criteria, [field]: event.target.value || '' });
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="section-title">Search properties</h2>
      <div className="form-row">
        <label className="form-field">
          <span>Type</span>
          <select value={criteria.type} onChange={handleChange('type')}>
            <option value="Any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
        <label className="form-field">
          <span>Postcode area</span>
          <input
            type="text"
            placeholder="e.g. BR1"
            value={criteria.postcodeArea}
            onChange={handleChange('postcodeArea')}
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Min price (£)</span>
          <input
            type="number"
            min="0"
            step="5000"
            value={criteria.minPrice}
            onChange={handleNumberChange('minPrice')}
          />
        </label>
        <label className="form-field">
          <span>Max price (£)</span>
          <input
            type="number"
            min="0"
            step="5000"
            value={criteria.maxPrice}
            onChange={handleNumberChange('maxPrice')}
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Min bedrooms</span>
          <input
            type="number"
            min="0"
            value={criteria.minBedrooms}
            onChange={handleNumberChange('minBedrooms')}
          />
        </label>
        <label className="form-field">
          <span>Max bedrooms</span>
          <input
            type="number"
            min="0"
            value={criteria.maxBedrooms}
            onChange={handleNumberChange('maxBedrooms')}
          />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Added from</span>
          <input
            type="date"
            value={criteria.fromDate}
            onChange={handleDateChange('fromDate')}
          />
        </label>
        <label className="form-field">
          <span>Added to</span>
          <input
            type="date"
            value={criteria.toDate}
            onChange={handleDateChange('toDate')}
          />
        </label>
      </div>
    </form>
  );
}

export default SearchForm;