import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome5'

class HomeView extends Component {
    render() {
        return (
            <View style={styles.container}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Tennis')}>
            <View style={styles.iconStyle}>
            <Icons name={'table-tennis'} size={80} color='pink'/>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BasketBall')}>
            <View style={styles.iconStyle}>
            <Icons name={'basketball-ball'} size={80} color='pink'/>
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => this.props.navigation.navigate('VolleyBall')}>
            <View style={styles.iconStyle}>
            <Icons name={'volleyball-ball'} size={80} color='pink'/>
            </View>
            </TouchableOpacity>
    
          </View>
        )
    }
}

export default HomeView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cbcbcb',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    iconStyle:{
      width:160,
      height:160,
      backgroundColor:'grey',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      borderWidth:2,
      borderColor:'black'
    }
  });
  