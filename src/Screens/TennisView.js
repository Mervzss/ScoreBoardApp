import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { ButtonCounters } from '../components/Defaults'

class TennisView extends Component {
    state={
        homeScore: 0,
        guestScore: 0
    }

    homeScoreRev = (val) =>{
        if(val === 'plus'){
        this.setState({
            homeScore: this.state.homeScore + 1
        })
        }
        else if(val === 'minus'){
            if(this.state.homeScore === 0){
                alert('ZERO NA PO')
            }
            else{
                this.setState({
                    homeScore: this.state.homeScore - 1
                })
            }
            
        }
    }

    guestScoreRev = (val) =>{
        if(val === 'plus'){
        this.setState({
            guestScore: this.state.guestScore + 1
        })
        }
        else if(val === 'minus'){
            if(this.state.guestScore === 0){
                alert('ZERO NA PO')
            }
            else{
                this.setState({
                    guestScore: this.state.guestScore - 1
                })
            }
            
        }
    }

    render() {
        return (
            <View style={styles.container}>


                {/* THIS IS UPPER VIEW */}
                <View style={styles.upperView}>

                    <ButtonCounters type='home' plusIT={this.homeScoreRev.bind(this,'plus')} minusIT={this.homeScoreRev.bind(this,'minus')}/>

                    <View style={styles.homeStyle}>
                        <Text style={styles.homeText}>HOME</Text>
                        <Text style={styles.numScoreHome}>{this.state.homeScore}</Text>
                    </View>


                    <View style={styles.middle}>
                        <Text> 0-1</Text>
                        <Text> 2nd </Text>
                    </View>


                    <View style={styles.guestStyle}>
                        <Text style={styles.guestText}>GUEST</Text>
                        <Text style={styles.numScoreGuest}>{this.state.guestScore}</Text>
                    </View>

                     <ButtonCounters type='guest' plusIT={this.guestScoreRev.bind(this,'plus')} minusIT={this.guestScoreRev.bind(this,'minus')}/>

                   
                </View>

                {/* THIS IS LOWER VIEW */}

                <View style={styles.lowerView}>
                    <View style={styles.setScoreStyle}>
                        <Text>SET 1</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text>SET 2</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text>SET 3</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text>SET 4</Text>
                    </View>

                </View>


            </View>
        )
    }
}

export default TennisView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbcbcb',
        flexDirection: 'column',
        //   justifyContent:'space-evenly'
    },
    upperView: {
        flex: .8,
        backgroundColor: '#cbcbcb',
        flexDirection: 'row',
    },
    lowerView: {
        flex: .2,
        backgroundColor: '#cbcbcb',
        flexDirection: 'row',
    },
    homeStyle: {
        width: '30%',
        backgroundColor: '#aa43ff',
        alignItems: 'center'
    },
    guestStyle: {
        width: '30%',
        backgroundColor: '#43ffee',
        alignItems: 'center'
    },
    middle: {
        width: '20%',
        backgroundColor: '#cafef6'
    },
    setScoreStyle: {
        width: '25%',
        backgroundColor: '#e2fca4',
        alignItems: 'center'

    },

    // PARA SA TEXT
    homeText: {
        color: '#7bfc4f',
        fontSize: 35,
        fontWeight: 'bold'
    },
    guestText: {
        color: '#fea45d',
        fontSize: 35,
        fontWeight: 'bold'
    },
    numScoreHome: {
        color: '#7bfc4f',
        fontSize: 150,
        fontWeight: 'bold'
    },
    numScoreGuest: {
        color: '#fea45d',
        fontSize: 150,
        fontWeight: 'bold'
    },



});
