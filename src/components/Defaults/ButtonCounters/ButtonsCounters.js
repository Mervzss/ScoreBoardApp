import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const ButtonCounters = props =>{
    return(
        <View style={styles.buttonCounters}>

                    {/* FOR INCREMENT */}
                    <TouchableOpacity onPress={props.plusIT}>
                        <View style={props.type === 'home' ? styles.homeButtonPlus : styles.guestButtonPlus}>
                            <Text style={props.type === 'home' ? styles.homeButtonTextPlus : styles.guestButtonTextPlus }>+</Text>
                        </View>
                    </TouchableOpacity>

                    {/* FOR DECREMENT */}

                    <TouchableOpacity onPress={props.minusIT}>
                        <View style={props.type === 'home' ? styles.homeButtonMinus : styles.guestButtonMinus}>
                            <Text style={props.type === 'home' ? styles.homeButtonTextMinus :  styles.guestButtonTextMinus}>-</Text>
                        </View>
                    </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    buttonCounters: {
        width: '10%',
        justifyContent:'center',
        backgroundColor: '#ff43e3'
    },
    homeButtonPlus: {
        backgroundColor: 'transparent',
        borderColor: '#7bfc4f',
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        height:100
    },
    homeButtonTextPlus: {
        color: '#7bfc4f',
        fontSize: 20,
        fontWeight: 'bold',
    },
    homeButtonMinus: {
        backgroundColor: 'transparent',
        borderColor: '#7bfc4f',
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        height:60
    },
    homeButtonTextMinus: {
        color: '#7bfc4f',
        fontSize: 20,
        fontWeight: 'bold'
    },

    guestButtonPlus: {
        backgroundColor: 'transparent',
        borderColor: '#fea45d',
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        height:100
    },
    guestButtonTextPlus: {
        color: '#fea45d',
        fontSize: 20,
        fontWeight: 'bold'
    },
    guestButtonMinus: {
        backgroundColor: 'transparent',
        borderColor: '#fea45d',
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        height:60
    },
    guestButtonTextMinus: {
        color: '#fea45d',
        fontSize: 20,
        fontWeight: 'bold'
    }



});
