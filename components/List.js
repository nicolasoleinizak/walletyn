import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native'
import generalStyles from '../assets/general-styles';
import { localDateString } from '../assets/functions';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recordListingTye: 0,
        }
    }

    render(){
        let filteredRecords = this.props.records.filter( record => {
            return record.type === this.state.recordListingTye
        })
        return(
            <View style={generalStyles.container}>
                <View style={generalStyles.switch}>
                    <TouchableHighlight style={generalStyles.switchItem(this.state.recordListingTye === 1)}><Text style={generalStyles.switchItemText(this.state.recordListingTye === 1)}>Ingresos</Text></TouchableHighlight>
                    <TouchableHighlight style={generalStyles.switchItem(this.state.recordListingTye === 0)}><Text style={generalStyles.switchItemText(this.state.recordListingTye === 0)}>Egresos</Text></TouchableHighlight>
                </View>
                <View>
                    {
                        filteredRecords.map( record => {
                            return(
                                <View style={generalStyles.record}>
                                    <Text style={{flex: 2}}>{localDateString(record.date)}</Text>
                                    <Text style={{flex: 4}}>{record.subject}</Text>
                                    <Text style={{flex: 1.5}}>$ {record.amount}</Text>
                                    <TouchableHighlight accessibilityRole="button" style={generalStyles.touchableView, {flex: 1}}>
                                        <Image  source={require('../assets/img/icons/editar.png')} style={generalStyles.buttonImage}/>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={generalStyles.touchableView, {flex: 1}} >
                                        <Image source={require('../assets/img/icons/remove.png')} style={generalStyles.buttonImage}/>
                                    </TouchableHighlight>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

export default List;