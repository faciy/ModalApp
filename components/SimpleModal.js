import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const SimpleModal = (props) =>{

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data)
    }

    return (
        <TouchableOpacity
        disabled={true}
        style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={[styles.text, {fontSize:20}]}>Exemple de Modal</Text>
                    <Text style={styles.text}>Monsieur SOL</Text>
                </View>
            <View style={styles.buttonView}>
                <TouchableOpacity 
                onPress={() => closeModal(false, 'Cancel')}
                style={styles.touchableOpacity}>
                    <Text style={[styles.text, {color:'blue'}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => closeModal(false, 'Ok')}
                style={styles.touchableOpacity}>
                    <Text style={[styles.text, {color:'blue'}]}>Ok</Text>
                </TouchableOpacity>
            </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1, 
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'blue'
    },
    modal:{
        height:HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop:20,
        backgroundColor:'white',
        borderRadius:10
    },
    textView:{
        flex:1,
        alignItems:'center'
    },
    text:{
        margin:5,
        fontSize:16,
        fontWeight:'bold'
    },
    buttonView:{
        width:'100%',
        flexDirection:'row'
    },
    touchableOpacity:{
        flex:1,
        alignItems:'center',
        paddingVertical:10
    }
  });

export default SimpleModal;
