import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginUser} from '../APIs/LoginService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    let userData = {
      email: email,
      password: password,
    };
    await loginUser(userData);
  };

  return (
    <LinearGradient colors={['#fff', '#3E4095']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.logo}>Ananth Jeevan</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.toggleButton}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Remember Me</Text>
          <CheckBox
            value={rememberMe}
            onValueChange={newValue => setRememberMe(newValue)}
            style={styles.checkbox}
            tintColors={{true: 'white', false: 'white'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            justifyContent: 'space-around',
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignContent: 'center'}}
            onPress={() => {}}>
            <Text style={{color: '#fff', fontSize: 15}}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              if (email == '' || password == '') {
                Alert.alert('Alert', 'Please Enter all Details');
              } else {
                handleLogin();
              }
            }}>
            <Text style={styles.submitButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            ...styles.gmailSubmitButton,
            padding: 7,
            flexDirection: 'row',
          }}
          onPress={() => {}}>
          <Text
            style={{
              fontSize: 22,
              color: '#3E4095',
              fontWeight: 'bold',
              paddingRight: 15,
            }}>
            G
          </Text>
          <Text style={{...styles.submitButtonText}}>Login with Gmail</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 15,
            }}
            onPress={{}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignSelf: 'center'}} onPress={{}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}>
              Anonymous Sing Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 76,
    alignSelf: 'center',
    fontFamily: 'Cochin',
  },
  toggleButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
    marginHorizontal: 10,
    paddingVertical: 7,
  },
  input: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 7,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  checkbox: {
    alignSelf: 'center',
    color: '#fff',
  },
  checkboxLabel: {
    color: 'white',
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: 120,
  },
  gmailSubmitButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    color: 'white',
    paddingLeft: 8,
  },
  submitButtonText: {
    color: '#3E4095',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
