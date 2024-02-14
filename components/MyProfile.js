import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class MyProfile extends Component {
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
                                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('UserDashboard')}>
                                    <FontAwesomeIcon icon="arrow-circle-left" size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.text}> MY USER PROFILE </Text>
                        </View>
                    </LinearGradient>
                </View>

                {/* form */}
                <View style={styles.form}>

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
        fontSize: 36,
        color: '#001663',
        margin: 30,
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
        height: 100,
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },  
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    iconButton: {
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
        marginTop: 5,
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
});

export default MyProfile;
