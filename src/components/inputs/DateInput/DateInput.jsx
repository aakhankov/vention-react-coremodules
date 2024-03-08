import PropTypes from 'prop-types';

export default function DateInput({ label, fieldName, value, onChange, error }) {
  return (
    <label className="form-horizontal-field">
      <p>{label}</p>
      <input
        type="date"
        name={fieldName}
        value={value}
        onChange={(e) => onChange(fieldName, e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
DateInput.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
