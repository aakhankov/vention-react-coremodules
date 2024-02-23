import { useState } from 'react';
import './Form.css';
import { handleSubmit } from './HandleSubmitForm';
import { useNavigate } from 'react-router-dom';
// import validateForm from './ValidateForm';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    status: 'Alive',
    description: '',
    fileInput: null,
    privacy: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    description: '',
    fileInput: '',
    privacy: '',
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      name: formData.name.length > 20 ? 'Name should be less than 20 characters' : '',
      age: isNaN(formData.age) || formData.age > 150 ? 'Invalid age' : '',
      description:
        formData.description.length > 500 ? 'Description should be less than 500 characters' : '',
      fileInput: formData.fileInput ? '' : 'Please upload a file',
      privacy: formData.privacy ? '' : 'Please accept the privacy policy',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleSubmit(navigate, formData, setFormData)(e);
      setErrors({
        name: '',
        age: '',
        description: '',
        fileInput: '',
        privacy: '',
      });
    }
  };

  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== '') ||
    Object.values(formData).some((value) => value === '');

  return (
    <div className="form-block">
      <h2 className="form-title">Character Form</h2>
      <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Number"
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
          {errors.age && <p className="error-message">{errors.age}</p>}
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Genderless</option>
          </select>
        </label>
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            required
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="deceased">Deceased</option>
          </select>
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </label>
        <label>
          Upload Photo:
          <input
            type="file"
            name="fileInput"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, fileInput: e.target.files[0] })}
          />
          {errors.fileInput && <p className="error-message">{errors.fileInput}</p>}
        </label>
        <label className="form-privacy-policy">
          Privacy Policy:
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={() => setFormData({ ...formData, privacy: !formData.privacy })}
          />
          {errors.privacy && <p className="error-message">{errors.privacy}</p>}
        </label>
        <button className="form-submit-btn" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
