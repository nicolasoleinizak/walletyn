import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, ScrollView, Modal } from 'react-native';
import generalStyles from '../assets/general-styles';
import DatePicker from '@dietime/react-native-date-picker';
import { timestamp } from '../assets/functions';

class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            date: 0,
            type: 0,
            subject: '',
            amount: 0
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    set(){
        this.setState({
            id: this.props.record.id,
            date: this.props.record.date,
            type: this.props.record.type,
            subject: this.props.record.subject,
            amount: this.props.record.amount
        }, () => {
            console.log(this.state)
        })
    }

    handleDateChange(value){
        this.setState({
            date: timestamp(value)
        })
    }

    handleInputChange(event){
        let name = event.target.name;
        let newValue = event.target.value;
        this.setState((prevState) => {
            return{
                    ...prevState,
                [name]: newValue
            }
        })
    }

    render(){
        return(
            <View style={generalStyles.modalView}>
                <View style={generalStyles.modalContainer}>
                    <Text style={generalStyles.h2}>Editar registro</Text>
                    <View style={generalStyles.recordForm}>
                        <View  style={generalStyles.textInput}>
                            <DatePicker value={new Date(this.state.date)} onChange={(value) => this.handleDateChange(value)}/>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Asunto...' style={generalStyles.textInput} value={this.state.subject} name="subject" onChange={this.handleInputChange}/>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Suma...' style={generalStyles.textInput} value={String(this.state.amount)} name="amount" onChange={this.handleInputChange} keyboardType='numeric'/>
                        </View>
                        <TouchableHighlight style={generalStyles.button}><Text style={generalStyles.buttonText}>Guardar</Text></TouchableHighlight>
                        <TouchableHighlight style={generalStyles.button} onPress={this.props.onClose}><Text style={generalStyles.buttonText}>Cancelar</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        );

    }
}

export default Editor;