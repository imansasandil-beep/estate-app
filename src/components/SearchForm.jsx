import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function SearchForm({ criteria, onChange }) {

  // Options for the property type dropdown widget
  const typeOptions = [
    { value: 'Any', label: 'Any' },
    { value: 'House', label: 'House' },
    { value: 'Flat', label: 'Flat' }
  ];

  // Handles simple text inputs
  const handleChange = (field) => (event) => {
    onChange({ ...criteria, [field]: event.target.value });
  };

  // React-Select returns an object, so we extract the value
  const handleSelectChange = (selectedOption) => {
    onChange({ ...criteria, type: selectedOption.value });
  };

  // Price slider returns an array with [min, max] values
  const handlePriceChange = (values) => {
    onChange({
      ...criteria,
      minPrice: values[0] || '',
      maxPrice: values[1] || ''
    });
  };

  // Bedroom slider works the same way as price
  const handleBedroomChange = (values) => {
    onChange({
      ...criteria,
      minBedrooms: values[0] || '',
      maxBedrooms: values[1] || ''
    });
  };

  // Keeps date values consistent when selecting or clearing dates
  const handleDateChange = (field) => (event) => {
    onChange({ ...criteria, [field]: event.target.value || '' });
  };

  return (
    // Form auto submission is prevented
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="section-title">Search properties</h2>

      {/* Property type and postcode filter */}
      <div className="form-row">
        <label className="form-field">
          <span>Type</span>
          <Select
            value={typeOptions.find(opt => opt.value === criteria.type)}
            onChange={handleSelectChange}
            options={typeOptions}
          />
        </label>
        <label className="form-field">
          <span>Postcode area</span>
          <input
            type="text"
            placeholder="e.g. Colombo"
            value={criteria.postcodeArea}
            onChange={handleChange('postcodeArea')}
          />
        </label>
      </div>

      {/* Price range slider widget */}
      <div className="form-row">
        <div className="form-field" style={{gridColumn: '1 / -1'}}>
          <span>Price Range: Rs. {criteria.minPrice || 0} - Rs. {criteria.maxPrice || 150000000}</span>
          <Slider
            range
            min={0}
            max={150000000}
            step={5000000}
            value={[criteria.minPrice || 0, criteria.maxPrice || 150000000]}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Bedroom range slider widget */}
      <div className="form-row">
        <div className="form-field" style={{gridColumn: '1 / -1'}}>
          <span>Bedrooms: {criteria.minBedrooms || 0} - {criteria.maxBedrooms || 10}</span>
          <Slider
            range
            min={0}
            max={10}
            step={1}
            value={[criteria.minBedrooms || 0, criteria.maxBedrooms || 10]}
            onChange={handleBedroomChange}
          />
        </div>
      </div>

      {/* Date range filter */}
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