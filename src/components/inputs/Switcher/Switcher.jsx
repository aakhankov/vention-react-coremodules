import ReactSwitch from 'react-switch';
import PropTypes from 'prop-types';

export default function Switcher({ fieldName, label, checked, onChange, error }) {
  return (
    <label className="form-horizontal-field">
      <p>{label}</p>
      <ReactSwitch onChange={(checked) => onChange(fieldName, checked)} checked={checked} />
      {error && <p className="error-message">{error}</p>}
    </label>
  );
}
Switcher.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  checked: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
