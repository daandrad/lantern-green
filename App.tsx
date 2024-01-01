import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/symbol-on.png';
import symbolOff from './assets/symbol-off.png';

export default function App() {
  // const [isActive, setIsActive] = useState(false);
  const [isActive, setisActive] = useState(false);
  
  function handlesSymbol(){

    setisActive((oldValue:boolean) => {
      return !oldValue})
    console.log('isActive')
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handlesSymbol} >
      <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
