import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default class UserDashboard extends Component {
    
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
                                <TouchableOpacity style={styles.iconButton}>
                                    <FontAwesomeIcon icon="arrow-circle-left" size={25} color="white" />
                                    <Text style={styles.headerText} >LOG OUT</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.text}> HELLO </Text>
                            <View style={styles.rightIcon}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <FontAwesomeIcon icon="info-circle" size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>

                {/* card section */}
                <View style={styles.cards}>
                    <TouchableOpacity style={styles.userCard} onPress={() => navigation.navigate('MyProfile')}>
                        <Image source={require('../assets/userProfile.png')} style={styles.userImage} />
                        <Text style={styles.cardText}>VIEW MY PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userCard} onPress={() => navigation.navigate('AllUsers')}>
                        <Image source={require('../assets/userHeirarchy.png')} style={styles.userImage} />
                        <Text style={styles.cardText}>VIEW HIERARCHY</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
                            <FontAwesomeIcon icon="home" size={36} color="white" />
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
        color: 'white',
        margin: 60,
        marginTop: 80,
        fontWeight: '300'
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    userCard: {
        width: 160,
        height: 225,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#258FFC',
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        width: 110,
        height: 110,
        margin: 10,
    },
    cardText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    header: {
        width: '100%',
        height: 220,
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },    
    footer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    iconButton: {
        margin: 5,
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
        justifyContent: 'space-between',
        marginTop: 15,
    },
    leftIcon: {
        position: 'absolute',
        left: -40,
    },
    rightIcon: {
        position: 'absolute',
        right: -40,
    },
});
