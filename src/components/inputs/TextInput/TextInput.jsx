import PropTypes from 'prop-types';

export default function TextInput({ label, fieldName, value, onChange, error }) {
  return (
    <label>
      <p>{label}</p>
      <input
        type="text"
        name={fieldName}
        value={value}
        onChange={(e) => onChange(fieldName, e.target.value)}
        required
      />
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
TextInput.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
