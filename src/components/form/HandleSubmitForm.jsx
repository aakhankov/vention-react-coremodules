import CharacterData from '../../data/CharacterData';

export const handleSubmit = (navigate, formData, setFormData) => (e) => {
  e.preventDefault();

  const updatedFormData = { ...formData };
  const fileInput = updatedFormData.fileInput;
  const reader = new FileReader();

  reader.onloadend = () => {
    updatedFormData.image = reader.result;
    updatedFormData.file = URL.createObjectURL(fileInput);
    //id to the new card
    updatedFormData.id = CharacterData[CharacterData.length - 1].id + 1;

    console.log(updatedFormData);
    CharacterData.push(updatedFormData);
    setFormData({
      name: '',
      age: '',
      gender: 'male',
      status: 'alive',
      description: '',
      fileInput: null,
      privacy: false,
    });
    navigate('/');
  };
  reader.readAsDataURL(fileInput);
};
