import PropTypes from 'prop-types';

export default function NumberInputs({ label, fieldName, value, onChange, error }) {
  return (
    <label>
      <p>{label}</p>
      <input
        type="number"
        name={fieldName}
        value={value}
        placeholder="Number"
        onChange={(e) => onChange(fieldName, e.target.value)}
        required
      />
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
NumberInputs.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
