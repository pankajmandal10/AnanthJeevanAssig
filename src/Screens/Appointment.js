import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';

const Appointment = () => {
  const [selectedService, setSelectedService] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const services = ['Select A Subject', 'Service 1', 'Service 2', 'Service 3'];
  const counselling = [
    'Mode of Counselling',
    'Service 1',
    'Service 2',
    'Service 3',
  ];
  const yourTimeToConnect = [
    'Your Time To Connect',
    'Service 1',
    'Service 2',
    'Service 3',
  ];

  const navigation = useNavigation();

  const handleLogout = () => {
    console.log('Log out');
  };

  let subjectList = services.map((item, index) => {
    return <Picker.Item key={index} label={item} value={item} />;
  });

  let counsellingList = counselling.map((item, index) => {
    return <Picker.Item key={index} label={item} value={item} />;
  });

  let YourTimeToConnectList = yourTimeToConnect.map((item, index) => {
    return <Picker.Item key={index} label={item} value={item} />;
  });

  return (
    <LinearGradient colors={['#fff', '#3E4095']} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleLogout}>
            <Ionicons
              name="log-out-outline"
              size={28}
              color="#3E4095"
              style={{transform: [{rotate: '180deg'}]}}
            />
          </TouchableOpacity>
          <View style={{marginBottom: 0, alignItems: 'center'}}>
            {/* <Image
              style={{height: 80, width: 80}}
              source={require('../assets/logo.png')}></Image> */}

            <Text style={styles.logo}>Ananth Jeevan</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#3E4095" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTittle}>Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '3E4095',
            }}>
            <Text style={{...styles.buttonTittle, color: '#3E4095'}}>
              Emergency
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <View style={styles.inputContainer}>
            <Picker
              mode="dropdown"
              selectedValue={selectedService}
              onValueChange={itemValue => setSelectedService(itemValue)}>
              <Picker.Item
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                label="Select A Subject"
                value="Select A Subject"
              />
              {subjectList}
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <Picker
              mode="dropdown"
              selectedValue={selectedService}
              onValueChange={itemValue => setSelectedService(itemValue)}>
              <Picker.Item
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                label="Mode of Counselling"
                value="Mode of Counselling"
              />
              {counsellingList}
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <Picker
              mode="dropdown"
              selectedValue={selectedService}
              onValueChange={itemValue => setSelectedService(itemValue)}>
              <Picker.Item
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                label="Your Time To Connect"
                value="Your Time To Connect"
              />
              {YourTimeToConnectList}
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Place"
              placeholderTextColor="#fff"
              value={appointmentTime}
              onChangeText={text => setAppointmentTime(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={{...styles.input, height: 80}}
              placeholder="Brief tell us your pronlem......... Type Here"
              value={appointmentTime}
              placeholderTextColor="#fff"
              numberOfLines={10}
              multiline={true}
              onChangeText={text => setAppointmentTime(text)}
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
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
    marginHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    alignContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 36,
    textAlign: 'center',
    // alignSelf: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
    borderRadius: 7,
    borderColor: '#fff',
    borderWidth: 1,
  },
  iosPickerContainer: {
    backgroundColor: '#fff',
  },
  androidPickerContainer: {
    backgroundColor: '#fff',
    color: 'red',
  },
  input: {
    // height: 40,
    fontSize: 16,
    borderColor: 'gray',
    // borderWidth: 1,
    paddingLeft: 8,
    color: 'white',
  },
  button: {width: 130, backgroundColor: '#3E4095', borderRadius: 17},
  buttonTittle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    padding: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  submitButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: 120,
  },
  submitButtonText: {
    color: '#4B0082',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Appointment;
