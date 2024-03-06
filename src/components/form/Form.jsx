import { useState } from 'react';
import './Form.css';
import { handleSubmit } from './HandleSubmitForm';
import { useNavigate } from 'react-router-dom';
import validateField from './ValidateField';
import ReactSwitch from 'react-switch';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    status: 'Alive',
    description: '',
    fileInput: null,
    privacy: false,
    date: false,
    switcher: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    description: '',
    fileInput: '',
    privacy: '',
    date: '',
    switcher: '',
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    const newFormData = { ...formData, [fieldName]: value };
    if (fieldName === 'fileInput') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...newFormData, imagePreview: reader.result });
      };
      if (value) {
        reader.readAsDataURL(value);
      }
    } else {
      setFormData(newFormData);
    }
    if (isSubmitClicked) {
      const newErrors = { ...errors, [fieldName]: validateField(fieldName, value) };
      setErrors(newErrors);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);

    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      handleSubmit(navigate, formData, setFormData)(e);
      setErrors({
        name: '',
        age: '',
        description: '',
        fileInput: '',
        privacy: '',
        date: '',
        switcher: '',
      });
      setIsSubmitClicked(false);
    }
  };

  const errorsInForm = Object.values(errors).some((error) => error !== '');
  const missedDataInForm = Object.values(formData).some((value) =>
    typeof value === 'boolean' ? false : value === ''
  );

  const isSubmitDisabled = errorsInForm || missedDataInForm;

  return (
    <div className="form-block">
      <h2 className="form-title">Character Form</h2>
      <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
        <label>
          <p>Name </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </label>
        <label>
          <p>Age </p>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Number"
            onChange={(e) => handleInputChange('age', e.target.value)}
            required
          />
          {errors.age && <p className="error-message">{errors.age}</p>}
        </label>
        <label>
          <p>Gender </p>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Genderless</option>
          </select>
        </label>
        <label>
          <p>Status </p>
          <select
            name="status"
            value={formData.status}
            onChange={(e) => handleInputChange('status', e.target.value)}
            required
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="deceased">Deceased</option>
          </select>
        </label>
        <label>
          <p>Description </p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </label>
        <label className="form-horizontal-field">
          <p>Privacy Policy </p>
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={(e) => handleInputChange('privacy', e.target.checked)}
          />
          {errors.privacy && <p className="error-message">{errors.privacy}</p>}
        </label>
        <label className="form-horizontal-field">
          <p>Date </p>
          <input
            type="date"
            name="date"
            checked={formData.privacy}
            onChange={(e) => handleInputChange('date', e.target.value)}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </label>
        <label className="form-horizontal-field">
          <p>Switcher </p>
          <ReactSwitch
            onChange={(checked) => handleInputChange('switcher', checked)}
            checked={formData.switcher}
          />
          {errors.switcher && <p className="error-message">{errors.switcher}</p>}
        </label>
        <label className="form-image-field">
          <p>Upload Photo </p>
          <input
            type="file"
            name="fileInput"
            accept="image/*"
            onChange={(e) => handleInputChange('fileInput', e.target.files[0])}
          />
          {errors.fileInput && <p className="error-message">{errors.fileInput}</p>}
          {formData.imagePreview && (
            <div>
              <p>Image Preview</p>
              <img className="preview-image" src={formData.imagePreview} alt="" />
            </div>
          )}
        </label>
        <button className="form-submit-btn" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
