import {View, Text, StyleSheet,  Dimensions, Image, TouchableOpacity} from 'react-native'; 
import React, {useState} from 'react'; 
import Lottie from 'lottie-react-native'; 
export default function App({route, navigation}){
  const {perguntas, id, pontos} = route.params 
  const initialValue = 0;
  const sumWithInitial = pontos.reduce( 
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

  return (
    <View style={styles.screen}> 
    <View style={styles.top}></View>
      
      <View style={styles.box}> 
        <Text style={styles.pontos_frase}>Sua Pontuação</Text> 
        <Text style={styles.pontos}>{sumWithInitial} - 100%</Text> 
      </View>
      <TouchableOpacity style={styles.voltar}
      onPress={()=>{
        navigation.navigate('Home') 
      }}
      >
        <Text styles = {styles.text_back}>Voltar</Text>
      </TouchableOpacity> 
    </View>

  )
}

const {width, height} = Dimensions.get('window') 
const styles = StyleSheet.create({
  screen: {
    width: width, 
    height: height, 
    backgroundColor: 'purple', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  pontos_frase:{
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'white', 
  }, 
  text_back: {
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold', 
  }, 
  pontos: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    
  },

  top: {
      width: width, 
      height: 50, 
      backgroundColor: 'black', 
      position: 'absolute', 
      zIndex: 2, 
      top: 0, 
  }, 
  box: {
    position: 'absolute', 
    width: 300,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center', 
  }, 
  voltar: {
    width: 200, 
    height: 40, 
    borderRadius: 10, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 100, 
  }
})
