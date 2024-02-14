import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


export default class AdminDashboard extends Component {
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
                                <TouchableOpacity style={styles.iconButton}  onPress={() => navigation.navigate('Login')}>
                                    <FontAwesomeIcon icon="arrow-circle-left" size={25} color="white" />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.headerText} >LOG OUT</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.text}> ADMIN AREA </Text>
                        </View>
                    </LinearGradient>
                </View>

                {/* card section */}
                <View style={styles.cards}>
                    <TouchableOpacity style={styles.userCard}  onPress={() => navigation.navigate('AddUser')}>
                        <Image source={require('../assets/add-user.png')} style={styles.userImage} />
                        <Text style={styles.cardText}>ADD NEW USER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userCard} onPress={() => navigation.navigate('AppUser')}>
                        <Image source={require('../assets/userHeirarchy.png')} style={styles.userImage} />
                        <Text style={styles.cardText}>VIEW ALL USERS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userCard} onPress={() => navigation.navigate('Questions')}>
                        <Image source={require('../assets/checklist.png')} style={styles.userImage} />
                        <Text style={styles.cardText}>QUESTIONS</Text>
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
                        <TouchableOpacity>
                            <FontAwesomeIcon icon="home" size={36} color="white" />
                        </TouchableOpacity>
                    </LinearGradient>
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
        fontSize: 40,
        color: 'white',
        margin: 50,
        marginTop: 80,
        fontWeight: '300'
    },
    textContainer:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 220,
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
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 15,
        color: 'white',
        margin:2,
        marginLeft:4
    },
    headerIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    leftIcon: {
        position: 'absolute',
        margin:10,
        left: 5,
    },
    
    footer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
    },

    cards: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginTop:140
    },
    userCard: {
        width: 320,
        height: 130,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#258FFC',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    userImage: {
        width: 90,
        height: 90,
        margin: 10,
    },
    cardText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
    },
})