import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class Login extends Component {
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
            <Text style={styles.text2}> HELLO </Text>
            <Text style={styles.text}> LOGIN HERE </Text>
          </LinearGradient>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter Email Address" />
          <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserDashboard')}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.buttonText}>ADMIN SIGN IN HERE</Text>
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
            <TouchableOpacity style={styles.footerNote} onPress={() => navigation.navigate('AskQuestion')}>
              <Text style={styles.footerNoteText}>Is There Any Problem</Text>
              <FontAwesomeIcon icon="bug" size={36} color="#001663" />
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
    marginTop: 100,
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

export default Login;
