export default function validateField(fieldName, value) {
  switch (fieldName) {
    case 'name':
      return value.length > 20 ? 'Name should be less than 20 characters' :
      value.trim().length === 0 ? 'Name cannot be empty' : '';
    case 'age':
      return isNaN(value) || value < 0 || value > 150 ? 'Invalid age' :
      value.trim().length === 0 ? 'Name cannot be empty' : '';
    case 'description':
      return value.length > 100 ? 'Description should be less than 100 characters' : 
      value.trim().length === 0 ? 'Description cannot be empty' : '';
    case 'fileInput':
      return value ? '' : 'Please upload a file';
    case 'privacy':
      return value ? '' : 'Please accept the privacy policy';
    case 'date':
      return value ? '' : 'Please add date';
    case 'switcher':
      return value ? '' : 'Please switch the switcher';
    default:
      return '';
  }
}
