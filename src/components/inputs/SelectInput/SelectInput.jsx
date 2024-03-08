import PropTypes from 'prop-types';

export default function SelectInput({ label, fieldName, value, onChange, options, error }) {
  return (
    <label>
      <p>{label}</p>
      <select
        name={fieldName}
        value={value}
        onChange={(e) => onChange(fieldName, e.target.value)}
        required
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
SelectInput.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  options: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
