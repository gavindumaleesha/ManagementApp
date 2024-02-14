import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class AdminLogin extends Component {
  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* Header section */}
        <View style={styles.header}>
          <LinearGradient
            colors={['#5ADEAC', '#4AC8F1']}
            style={[styles.gradient, { borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }]}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Text style={styles.text2}> HI, </Text>
            <Text style={styles.text}> ADMIN </Text>
            <Image source={require('../assets/admin.png')} style={styles.userImage} />
          </LinearGradient>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter Login Code" secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdminDashboard')}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>


        {/* Footer section */}
        <View style={styles.footer}>
          <LinearGradient
            colors={['#5ADEAC', '#4AC8F1']}
            style={styles.gradient}
            start={[0, 0]}
            end={[1, 1]}
          >
            <TouchableOpacity style={styles.footerNote} onPress={() => navigation.navigate('Login')}>
              
              <FontAwesomeIcon icon="circle-chevron-left" size={34} color="#001663" />
              <Text style={styles.footerNoteText}>Back To Main Login</Text>
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
    margin: 10,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: -20,
  },
  text2: {
    fontSize: 40,
    color: 'white',
    margin: 20,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: -80,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 500,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  form: {
    width: '80%',
    marginTop: 230,
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
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
  userImage: {
    width: 150,
    height: 150,
    margin: 10,
  },
  button2: {
    backgroundColor: '#4FD0D7',
    width: '100%',
    height: 50,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
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
    color: '#001663',
  },
});

export default AdminLogin;
