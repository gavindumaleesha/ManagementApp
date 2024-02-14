import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managerLevel: '',
    };
  }

  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* header section */}
        <View style={styles.header}>
          <LinearGradient
            colors={['#5ADEAC', '#4AC8F1']}
            style={[styles.gradient, { borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }]}
            start={[0, 0]}
            end={[1, 1]}
          >
            <View style={styles.headerIcons}>
              <View style={styles.leftIcon}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AdminDashboard')}>
                  <FontAwesomeIcon icon="arrow-circle-left" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <Text style={styles.text}> ADD NEW USER </Text>
            </View>
          </LinearGradient>
        </View>

        {/* form */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter First Name" />
          <TextInput style={styles.input} placeholder="Enter Last Name" />
          <TextInput style={styles.input} placeholder="Enter Email Address" />

          {/* Manager Level dropdown */}
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={this.state.managerLevel}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({ managerLevel: itemValue })}
            >
              <Picker.Item label="Manager Level 1" value="1" />
              <Picker.Item label="Manager Level 2" value="2" />
            </Picker>
          </View>

          <TextInput style={styles.input} placeholder="Assign Manager" />
          <TextInput style={styles.input} placeholder="Create Password" secureTextEntry={true} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* footer section */}
        <View style={styles.footer}>
          <LinearGradient
            colors={['#5ADEAC', '#4AC8F1']}
            style={styles.gradient}
            start={[0, 0]}
            end={[1, 1]}
          >
            <TouchableOpacity style={styles.footerNote}>
              <Text style={styles.footerNoteText}>Send Credentials Via Mail</Text>
              <FontAwesomeIcon icon="envelope" size={36} color="#001663" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: '#001663',
    margin: 20,
    fontWeight: '300'
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  footerNote: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerNoteText: {
    fontSize: 15,
    padding: 10,
    color: '#001663'
  },
  form: {
    width: '80%',
    marginTop: 30,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 18
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
    height: 40,
    width: '100%',
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#258FFC',
    width: '100%',
    height: 50,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
});

export default AddUser;
