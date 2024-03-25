export const handleSubmit = (navigate, formData, setFormData) => async (e) => {
  e.preventDefault();

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  };

  try {
    const response = await fetch('https://your-api-url/characters', requestOptions);
    if (!response.ok) {
      throw new Error('Failed to add character');
    }
    const newCharacter = await response.json();
    console.log(newCharacter);
    setFormData({
      name: '',
      age: '',
      gender: 'male',
      status: 'alive',
      description: '',
      fileInput: null,
      privacy: false,
      date: '',
      switcher: false
    });
    navigate('/');
  } catch (error) {
    console.error('Error adding character:', error.message);
  }
};
