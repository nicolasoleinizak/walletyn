import { StyleSheet } from 'react-native';

const recordHeight = 38;

const generalStyles = StyleSheet.create({
    h1: {
        fontSize: 20,
        lineHeight: 50,
    },
    h2: {
        fontSize: 20,
        lineHeight: 40
    },
    fullContainer: {
        flex: 1,
        width: '100%'
    },
    container: {
        flex: 1,
        padding: 5,
        paddingBottom: 10,
        marginTop: 20,
    },
    textInput: {
        margin: 5,
        maxWidth: 400,
        padding: 8,
        borderColor: 'rgb(100,100,100)',
        borderWidth: 2,
        borderRadius: 8
    },
    touchableView: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    buttonImage: {
        width: recordHeight*0.9-4,
        height: recordHeight*0.9-4,
    },
    record: {
        height: recordHeight,
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    recordsList: {
        padding: 5,
    },
    recordCell: {
        padding: 3,
    },
    switch: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
    },
    switchItem: function(listingType){
        if(listingType){
            return(
                {
                    flex: 1,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                }
            )
        }
        else{
            return {
                flex: 1,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    },
    switchItemText: function(listingType){
        if(listingType){
            return(
                {
                    color: 'white'
                }
            )
        }
        else{
            return {
                color: 'inherit'
            }
        }
    },
    modal: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        padding: 15,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        backgroundColor: 'white',
    }
})

export default generalStyles;