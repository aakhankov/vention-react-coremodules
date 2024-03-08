import PropTypes from 'prop-types';

export default function Checkbox({ label, fieldName, checked, onChange, error }) {
  return (
    <label className="form-horizontal-field">
      <p>{label}</p>
      <input
        type="checkbox"
        name={fieldName}
        checked={checked}
        onChange={(e) => onChange(fieldName, e.target.checked)}
      />
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  checked: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
