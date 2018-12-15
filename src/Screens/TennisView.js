import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
                        <Text style={styles.middleText}> 0-1</Text>
                        <Text style={styles.middleText}> 2nd </Text>
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
                        <Text style={styles.setText}>SET 1</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text style={styles.setText}>SET 2</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text style={styles.setText}>SET 3</Text>
                    </View>
                    <View style={styles.setScoreStyle}>
                        <Text style={styles.setText}>SET 4</Text>
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
        backgroundColor: 'black',
        flexDirection: 'column',
        //   justifyContent:'space-evenly'
    },
    upperView: {
        flex: .8,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    lowerView: {
        flex: .2,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    homeStyle: {
        width: '30%',
        backgroundColor: 'black',
        alignItems: 'center'
    },
    guestStyle: {
        width: '30%',
        backgroundColor: 'black',
        alignItems: 'center'
    },
    middle: {
        width: '20%',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center'
    },
    setScoreStyle: {
        width: '25%',
        backgroundColor: 'black',
        alignItems: 'center'

    },

    // PARA SA TEXT
    homeText: {
        color: '#ff0000',
        fontSize: 35,
        fontWeight: 'bold'
    },
    guestText: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    numScoreHome: {
        color: '#ff0000',
        fontSize: 150,
        fontWeight: 'bold'
    },
    numScoreGuest: {
        color: '#ffffff',
        fontSize: 150,
        fontWeight: 'bold'
    },
    middleText:{
        fontSize:40,
        color:'#67f1df',
    },
    setText:{
        fontSize:10,
        color:'#ffffff',
        fontWeight: 'bold'
    }



});
