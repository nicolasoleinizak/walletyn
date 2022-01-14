import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, ScrollView } from 'react-native'
import generalStyles from '../assets/general-styles';
import DatePicker from '@dietime/react-native-date-picker';
import { timestamp } from '../assets/functions';

class New extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 0,
            date: 0,
            subject: '',
            amount: 0
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.close = this.close.bind(this);
        this.reset = this.reset.bind(this);
        this.register = this.register.bind(this);
    }
    
    handleDateChange(value){
        this.setState({
            date: timestamp(value)
        })
    }
    
    handleInputChange(value, name){
        this.setState(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    close(){
        this.reset()
        this.props.onClose()
    }

    reset(){
        this.setState({
            type: 0,
            date: timestamp(new Date())
        })
    }

    register(){
        this.props.onRegister(
            this.state.type,
            this.state.date,
            this.state.subject,
            this.state.amount
        )
        this.close();
    }


    render(){
        return(
            <View style={generalStyles.modalView}>
                <View style={generalStyles.modalContainer}>
                    <Text style={generalStyles.h2}>Nuevo registro</Text>
                    <View style={generalStyles.recordForm}>
                        <View  style={generalStyles.textInput}>
                            <DatePicker value={new Date()} onChange={(value) => this.handleDateChange(value)}/>
                        </View>
                        <View style={generalStyles.switch}>
                            <TouchableHighlight style={generalStyles.switchItem(this.state.type === 1)}><Text style={generalStyles.switchItemText(this.state.type === 1)}>Ingresos</Text></TouchableHighlight>
                            <TouchableHighlight style={generalStyles.switchItem(this.state.type === 0)}><Text style={generalStyles.switchItemText(this.state.type === 0)}>Egresos</Text></TouchableHighlight>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Asunto...' style={generalStyles.textInput} value={this.state.subject} onChangeText={(value) => this.handleInputChange(value, 'subject')}/>
                        </View>
                        <View style={generalStyles.formField}>
                            <TextInput placeholder='Suma...' style={generalStyles.textInput} value={String(this.state.amount)} onChangeText={(value) => this.handleInputChange(value, 'amount')}/>
                        </View>
                        <TouchableHighlight style={generalStyles.button} onPress={this.register}><Text style={generalStyles.buttonText}>Registrar</Text></TouchableHighlight>
                        <TouchableHighlight style={generalStyles.button} onPress={this.close}><Text style={generalStyles.buttonText}>Cerrar</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

export default New;