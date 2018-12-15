import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ButtonCounters } from "../components/Defaults"

class VolleyBallView extends Component {
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
                {/* //UPPER */}
                <View style={styles.Upper}>
                <ButtonCounters type='home' plusIT={this.homeScoreRev.bind(this,'plus')} minusIT={this.homeScoreRev.bind(this,'minus')}/>
                    <View style={styles.gueststyle}>
                        <View style={styles.guest}>
                            <Text style={styles.guesttxt}>GUEST</Text>
                        </View>
                        <View style={styles.guestscr}>
                            <Text style={styles.guestscrtxt}>{this.state.homeScore}</Text>
                        </View>
                    </View>
                    <View style={styles.midstyle}>
                            <Text style={styles.scoreset}>0-1</Text>
                            <Text style={styles.scoremtch}>2nd</Text>
                    </View>
                    <View style={styles.homestyle}>
                        <View style={styles.home}>
                            <Text style={styles.hometxt}> HOME </Text>
                        </View>
                        <View style={styles.homescr}>
                            <Text style={styles.homescrtxt}>{this.state.guestScore}</Text>
                        </View>
                    </View>
                    <ButtonCounters type='guest'  plusIT={this.guestScoreRev.bind(this,'plus')} minusIT={this.guestScoreRev.bind(this,'minus')}/>
                </View>

                {/* LOWER */}
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
const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        flex: 1
    },
    Upper: {
        backgroundColor: "black",
        flex: .8,
        flexDirection: 'row'
    },
    //HOME
    homestyle: {
        width: "30%",
        backgroundColor: "black",
        alignItems: 'center'
    },
    home:{
    },
    //MID
    midstyle: {
        width: "20%",
        backgroundColor: "black",  
        alignItems: 'center'  
    },
    //GUEST
    gueststyle: {
        width: "30%",
        backgroundColor: "black",
        alignItems:"center"
    },
    guest:{
    },
    //LOWER
    lowerView: {
        flex: .2,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    setScoreStyle:{
        width: '25%',
        backgroundColor: 'black',
        alignItems: 'center'
    },
    //TEXT
    guesttxt:{
        color: 'red',
        fontSize: 35,
        fontWeight: 'bold'
    },
    guestscrtxt:{
        color: 'red',
        fontSize: 150,
        fontWeight: 'bold'
    },
    hometxt:{
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    homescrtxt:{
        color: '#ffffff',
        fontSize: 150,
        fontWeight: 'bold'
    },
    scoreset:{
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    setText:{
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    scoremtch:{
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold'
    }

})
export default VolleyBallView;