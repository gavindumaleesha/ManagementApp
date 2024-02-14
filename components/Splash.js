import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Splash extends Component {
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
                    <Text style={styles.text}> MANAGER LEVEL HIERARCHY APPLICATION </Text>
                </LinearGradient>
            </View>

            {/* button section */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={styles.touchablebtn}
                onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}> GET STARTED </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36,
        color: 'white',
        margin: 50,
        marginTop: 80,
        fontWeight: '300',
        textAlign: 'center' 
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 600, 
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },  
    touchablebtn:{
        backgroundColor:'#258FFC',
        width: '60%',
        height: 60,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        color: 'white',
        fontSize: 20
    },
    buttonContainer:{
        position: 'absolute',
        bottom: 50, 
        alignItems: 'center',
        width: '100%',
    }
})
