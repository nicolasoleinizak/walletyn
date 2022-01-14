import React from "react";
import { View, Text, Button, Image, TouchableHighlight } from 'react-native'; 
import generalStyles from "../assets/general-styles";
import { localDateString } from "../assets/functions";

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={generalStyles.container}>
                <View>
                    {
                        this.props.records.map( record => {
                            return(
                                <View style={generalStyles.record} key={record.id}>
                                    <Text style={generalStyles.recordCell, {flex: 2}}>{localDateString(record.date)}</Text>
                                    <Text style={generalStyles.recordCell, {flex: 4}}>{record.subject}</Text>
                                    <Text style={generalStyles.recordCell, {flex: 1.5}}>$ {record.amount}</Text>
                                    <TouchableHighlight accessibilityRole="button" style={generalStyles.recordCell, generalStyles.touchableView}>
                                        <Image source={require('../assets/img/icons/editar.png')} style={generalStyles.buttonImage}/>
                                    </TouchableHighlight>
                                    <TouchableHighlight accessibilityRole="button" style={generalStyles.recordCell, generalStyles.touchableView} >
                                        <Image source={require('../assets/img/icons/remove.png')} style={generalStyles.buttonImage}/>
                                    </TouchableHighlight>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

export default Home;