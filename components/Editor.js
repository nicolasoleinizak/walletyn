import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, ScrollView, Modal } from 'react-native';
import generalStyles from '../assets/general-styles';
import DatePicker from '@dietime/react-native-date-picker';
import { timestamp } from '../assets/functions';

class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: 0,
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(value){
        this.setState({
            date: timestamp(value)
        })
    }

    render(){
        return(
            <View style={generalStyles.modalView}>
                <View style={generalStyles.modalContainer}>
                    <Text style={generalStyles.h2}>Editar registro</Text>
                    <View style={generalStyles.recordForm}>
                        <View  style={generalStyles.textInput}>
                            <DatePicker value={new Date()} onChange={(value) => this.handleDateChange(value)}/>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Asunto...' style={generalStyles.textInput}/>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Suma...' style={generalStyles.textInput}/>
                        </View>
                        <TouchableHighlight style={generalStyles.button}><Text style={generalStyles.buttonText}>Guardar</Text></TouchableHighlight>
                        <TouchableHighlight style={generalStyles.button}><Text style={generalStyles.buttonText}>Cancelar</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        );

    }
}

export default Editor;