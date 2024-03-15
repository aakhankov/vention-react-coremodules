import { useState, useRef, useEffect } from 'react';
import './Form.css';
import { handleSubmit } from './HandleSubmitForm';
import { useNavigate } from 'react-router-dom';
import validateField from './ValidateField';
import TextInput from '../inputs/TextInput/TextInput';
import NumberInputs from '../inputs/NumberInput/NumberInput';
import SelectInput from '../inputs/SelectInput/SelectInput';
import Checkbox from '../inputs/CheckboxInput/Checkbox';
import DateInput from '../inputs/DateInput/DateInput';
import FileInput from '../inputs/FileInput/FileInput';
import Switcher from '../inputs/Switcher/Switcher';

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
  const [isFormDirty, setIsFormDirty] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      setIsFormDirty(true);
    };

    const handleBlur = () => {
      setIsFormDirty(false);
    };

    const formElement = formRef.current;

    formElement.addEventListener('focusin', handleFocus);
    formElement.addEventListener('focusout', handleBlur);

    return () => {
      formElement.removeEventListener('focusin', handleFocus);
      formElement.removeEventListener('focusout', handleBlur);
    };
  }, []);

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
    }
  };

  const isSubmitDisabled =
    !isFormDirty &&
    (Object.values(errors).some((error) => error !== '') ||
      Object.values(formData).some((value) => (typeof value === 'boolean' ? false : value === '')));

  return (
    <div className="form-block">
      <h2 className="form-title">Character Form</h2>
      <form className="form" onSubmit={onSubmit} ref={formRef} encType="multipart/form-data">
        <TextInput
          label="Name"
          fieldName="name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <NumberInputs
          label="Age"
          fieldName="age"
          value={formData.age}
          onChange={handleInputChange}
          error={errors.age}
        />
        <SelectInput
          label="Gender"
          fieldName="gender"
          value={formData.gender}
          onChange={handleInputChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Genderless' },
          ]}
        />
        <SelectInput
          label="Status"
          fieldName="status"
          value={formData.status}
          onChange={handleInputChange}
          options={[
            { value: 'alive', label: 'Alive' },
            { value: 'dead', label: 'Dead' },
            { value: 'deceased', label: 'Deceased' },
          ]}
        />
        <TextInput
          label="Description"
          fieldName="description"
          value={formData.description}
          onChange={handleInputChange}
          error={errors.description}
        />
        <Checkbox
          fieldName="privacy"
          label="Privacy Policy"
          checked={formData.privacy}
          onChange={handleInputChange}
          error={errors.privacy}
        />
        <DateInput
          fieldName="date"
          label="Date"
          value={formData.date}
          onChange={handleInputChange}
          error={errors.date}
        />
        <Switcher
          fieldName="switcher"
          label="Switcher"
          checked={formData.switcher}
          onChange={handleInputChange}
          error={errors.switcher}
        />
        <FileInput
          fieldName="fileInput"
          label="Upload Photo"
          onChange={handleInputChange}
          error={errors.fileInput}
          imagePreview={formData.imagePreview}
        />
        <button className="form-submit-btn" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
