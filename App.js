import React, {useEffect, useState} from 'react';
import {
    View,
    Text, 
    Modal,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SimpleModal from './components/SimpleModal';

const App = () =>{

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [chooseData, setChooseData] = useState()

  const changeModalVisible = (bool) =>{
    setIsModalVisible(bool)
  }

  const setData = (data) => {
    setChooseData(data)
  }

  useEffect(() => {
    // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textOne}>
        {chooseData}
      </Text>
      <TouchableOpacity
      onPress={() => changeModalVisible(true)} 
      style={styles.touchableOpacity}>
          <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
      transparent={true}
      animationType='fade'
      visible={isModalVisible}
      onRequestClose={() => changeModalVisible(false)}
      >
        <SimpleModal 
        changeModalVisible={changeModalVisible}
        setData={setData}
        />
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  },
  touchableOpacity:{
    backgroundColor: 'orange',
    paddingHorizontal : 50
  },
  text:{
    marginVertical : 20,
    fontSize: 20,
    fontWeight:'bold'
  },
  textOne:{
    margin:5,
    fontSize:16,
    fontWeight:'bold'
},
});


export default App;
