import { useState } from 'react';
import './Form.css';
import { handleSubmit } from './HandleSubmitForm';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const onSubmit = handleSubmit(navigate, formData, setFormData);

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
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
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
        </label>
        <label>
          Upload Photo:
          <input
            type="file"
            name="fileInput"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, fileInput: e.target.files[0] })}
          />
        </label>
        <label>
          Privacy Policy:
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={() => setFormData({ ...formData, privacy: !formData.privacy })}
            required
          />
        </label>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
