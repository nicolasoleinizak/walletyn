import React from 'react'
import { StyleSheet, Text, View, Button, Image, useColorScheme, Modal} from 'react-native';
import colors from '../assets/colors.js';

class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={style.container}>
                <Button title="Close" onPress={this.closeOptionsModal}></Button>
            </View>
        )
    }
}

const style = {
    container: {
        flex: 1,
        width: '80%',
        backgroundColor: colors.darkBlue,
        position: 'absolute',
        top: 0,
        left: 0,
    },
}

export default Menu;