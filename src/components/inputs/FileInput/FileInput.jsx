import PropTypes from 'prop-types';

export default function FileInput({ label, fieldName, imagePreview, onChange, error }) {
  return (
    <label className="form-image-field">
      <p>{label}</p>
      <input
        type="file"
        name={fieldName}
        accept="image/*"
        onChange={(e) => onChange(fieldName, e.target.files[0])}
      />
      {error && <p className="error-message">{error}</p>}
      {imagePreview && (
        <div>
          <p>Image Preview</p>
          <img className="preview-image" src={imagePreview} alt="" />
        </div>
      )}
    </label>
  );
}
FileInput.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  imagePreview: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.any,
};
