import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground,} from 'react-native'; 
import React from 'react'; 
import Constants from 'expo-constants'; 
import {useNavigation} from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons'; 
import Frase from 'react-native-keyboard-digits'; 

export default function App(props){ 
  const frase = '\tA maioria dos meteoritos de Marte são rochas ígneas conhecidas como basalto. O meteorito mais antigo de Marte é o ALH84001, que tem 4,1 bilhões de anos. É um tipo de rocha conhecido como ortopiroxenito. Também possui minerais que se formaram por reações entre o material original e a água que se formaram há 3,9 bilhões de anos. Os mais antigos minerais conhecidos de Marte são zircões de 4,4 bilhões de anos de um meteorito de 2,1 bilhões de anos (NWA 7034) encontrado no Noroeste e seus pares, que são análogos aos antigos zircões de Jack Hills na Terra. As rochas mais jovens conhecidas de Marte são meteoritos basálticos, rochas conhecidas como shergottites, as mais novas com cerca de 180 milhões de anos. ' 
  const planetas = props.params 
  return( 
    <View style={styles.main}> 
      <Top planet = {planetas}/> 
      <View>
        <ImageBackground style={styles.imagem} source={{uri:'https://www.nasa.gov/sites/default/files/thumbnails/image/pia21723-16.jpg'}}> 
          <Text style={styles.textimg}>MARTE</Text> 
        </ImageBackground> 
        <Text style={styles.texto}>DESCRIÇÃO</Text> 
        <View style={styles.text2}>
          <Frase texto={frase}/> 
        </View>
      </View>
    </View> 
  )
}

function Top(props){ 
  const navigation = useNavigation()
  return(
    <View style={stylestop.main}>
      <TouchableOpacity style={stylestop.touch} onPress={()=>{navigation.pop()}}> 
        <Icon name='arrow-back' size={30} color={'white'}/> 
      </TouchableOpacity> 
      <Text style={stylestop.text}>Planeta </Text> 
      <TouchableOpacity style={{position: 'absolute', right: 0}}>
        <Icon name = 'share' size={30} color={'white'}/> 
      </TouchableOpacity> 
    </View> 
  )
}

const {width, height} = Dimensions.get('window') 

const styles = StyleSheet.create({
  main: {
    width: width, 
    height: height, 
    marginTop: Constants.statusBarHeight, 
    backgroundColor: 'white', 
  }, 
  imagem: {
    width: width, 
    height: 200, 
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center', 

  }, 
  textimg: {
    fontSize: 40, 
    fontWeight: 'bold', 
    color: 'white', 
  }, 

  texto: {
    fontWeight: 'bold', 
    fontSize: 30, 
    marginTop: 10, 
    paddingHorizontal: 10, 
    paddingVertical: 10, 
  }, 

  text2: {
    width: width, 
    paddingHorizontal: 10, 
  }
})

const stylestop = StyleSheet.create({
  main: {
    width: width, 
    height: 50, 
    backgroundColor: 'black', 
    flexDirection: 'row', 
    alignItems: 'center', 

  }, 
  touch: {
    width: 30, 
    height: 30, 

  }, 

  text: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 10, 
  }
})