export default function validateField(fieldName, value) {
  switch (fieldName) {
    case 'name':
      return value.length > 20 ? 'Name should be less than 20 characters' : '';
    case 'age':
      return isNaN(value) || value > 150 ? 'Invalid age' : '';
    case 'description':
      return value.length > 100 ? 'Description should be less than 100 characters' : '';
    case 'fileInput':
      return value ? '' : 'Please upload a file';
    case 'privacy':
      return value ? '' : 'Please accept the privacy policy';
    case 'date': 
      return value ? '' : 'Please add date'
    case 'switcher':
      return value ? '' : 'Please switch the switcher';
    default:
      return '';
  }
}