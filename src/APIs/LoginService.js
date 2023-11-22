import {Alert} from 'react-native';

// Example of using the Fetch API to authenticate a user
export const loginUser = async userData => {
  console.warn('userData', userData);
  const apiUrl =
    'https://renatotech.com/AnanthjeevanAppQa/public/api/authenticate';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.warn('in res po', response.status, response.ok);

    if (response.ok) {
      const data = await response.json();
      // Check for success property in the response
      if (data.success) {
        // Display a success alert
        Alert.alert('Success', 'Authentication successful!');
        console.log('Token:', data.token);
      } else {
        Alert.alert('Alert', 'Authentication failed');
      }
    } else {
      // Display an alert for unsuccessful authentication
      Alert.alert('Error', 'Authentication failed. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    Alert.alert(
      'Error',
      'An unexpected error occurred. Please try again later.',
    );
  }
};
