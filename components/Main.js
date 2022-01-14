import React from 'react'
import { StyleSheet, Text, View, Button, Image, useColorScheme, Modal, StatusBar, Touchable, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import generalStyles from '../assets/general-styles.js';

import Home from './Home.js';
import List from './List.js';
import Editor from './Editor.js';
import New from './New.js';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: 'Home',
            modalEditorVisible: false,
            modalNewVisible: false,
            records: [
                {
                    id: 0,
                    type: 0,
                    date: 1641947910000,
                    subject: 'Lorep ipsum dolor',
                    amount: 1500
                },
                {
                    id: 1,
                    type: 0,
                    date: 1641937910000,
                    subject: 'Lorep ipsum dolor sit',
                    amount: 900
                },
                {
                    id: 2,
                    type: 0,
                    date: 1641948910000,
                    subject: 'Lorep dolor meus sit',
                    amount: 2000
                },
                {
                    id: 3,
                    type: 1,
                    date: 1641958990000,
                    subject: 'Dolor ipsum meum est',
                    amount: 6000
                },
            ],
            editedRecord: {
                id: null,
                type: 1,
                date: 1641958990000,
                subject: 'Dolor ipsum meum est',
                amount: 6000
            },
        }
        this.openNewModal = this.openNewModal.bind(this);
        this.openEditorModal = this.openEditorModal.bind(this);
        this.closeNewModal = this.closeNewModal.bind(this);
        this.closeEditorModal = this.closeEditorModal.bind(this);
        this.editor = React.createRef()
    }

    changeView(viewName){
        this.setState({
            view: viewName
        })
    }

    openNewModal(){
        this.setState({
            modalNewVisible: true
        })
    }

    openEditorModal(recordId){
        this.setState({
            editedRecord: this.state.records.find( record => {
                return record.id === recordId;
            }),
            modalEditorVisible: true
        }, () => {
            console.log(this.state.editedRecord)
            this.editor.current.set()
        })
    }

    closeNewModal(){
        this.setState({
            modalNewVisible: false
        })
    }

    closeEditorModal(){
        this.setState({
            modalEditorVisible: false
        })
    }

    render(){
        let view = () => {
            switch(this.state.view){
                case 'Home':
                    return <Home records={this.state.records} onEdit={this.openEditorModal}/>
                case 'List':
                    return <List records={this.state.records} onEdit={this.openEditorModal}/>
            }
        }
        return(
        <View style={generalStyles.container}>
            <View style={styles.header}>
                <Text style={styles.siteTitle}>Walletyn</Text>
                <View style={styles.mainNav}>
                    <TouchableHighlight style={generalStyles.touchableView} onPress={() => this.changeView('Home')} underlayColor={'grey'}><Image style={generalStyles.buttonImage} source={require('../assets/img/icons/casa.png')} /></TouchableHighlight>
                    <TouchableHighlight style={generalStyles.touchableView} onPress={() => this.changeView('List')} underlayColor={'grey'}><Image style={generalStyles.buttonImage} source={require('../assets/img/icons/portapapeles.png')} /></TouchableHighlight>
                    <TouchableHighlight style={generalStyles.touchableView} onPress={this.openNewModal} underlayColor={'grey'}><Image style={generalStyles.buttonImage} source={require('../assets/img/icons/mas.png')} /></TouchableHighlight>
                </View>
            </View>
            <View style={styles.content}>
                {
                    view()
                }
            </View>
            <Modal visible={this.state.modalEditorVisible} animationType='fade'>
                <Editor onClose={this.closeEditorModal} record={this.state.editedRecord} ref={this.editor}/>
            </Modal>
            <Modal visible={this.state.modalNewVisible} animationType='fade' style={generalStyles.modal}>
                <New onClose={this.closeNewModal}/>
            </Modal>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        position: 'relative',
        flex: 0.2,
        justifyContent: 'space-around',
        borderColor: 'black',
        borderBottomWidth: 3,
        borderStyle: 'solid',
        padding: '5%',
        textAlign: 'center'
    },
    content: {
        flex: 0.8,
    },
    siteTitle: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20
    },
    mainNav: {
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navButton: {
        flex: 1,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center'
    } 
});

export default Main;