import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Linking} from 'react-native'; 
import Constants from 'expo-constants'; 
import Ionicons from '@expo/vector-icons/Ionicons'; 
import astronauta from '../imagem/astronauta.webp'; 
import  levi from '../imagem/levi10.png'; 
import whatsapp from '../imagem/WhatsAppsvg.webp'; 
import vialactea from '../imagem/vialactea.jpg'; 

export default function App({navigation}) { 
  const frase = '\n\n\tOferecemos aos(as) professores(as), com apoio dos(as) gestores(as), um CARDÁPIO, uma lista de atividades experimentais que temos possibilidade de oferecer. O(A) professor(a0 escolhe o conjunto que melhor se adequa a sua sequência didática já realizada ou em andamento, caso ele(a) queira dá apenas um exemplo experimental, ou que esteja a iniciar, caso queira utilizar para ser uma problemática.' 
  return ( 
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}> 
          <Ionicons name='ios-menu' size={30} color={'white'}/>  
        </TouchableOpacity> 
        <Ionicons name='ios-notifications-outline' size={30} color={'white'}/> 
      </View>
      <View style={styles.scroll}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Homes')}}> 
        <View style={styles.scrollx}> 
          <Image style={styles.imgs} source={astronauta}/> 
          <Text style={styles.bemvindo}>Seja bem vindo ao</Text> 
          <Text style={styles.bemvindo}>DROPS NO MUNDO DA LUA! </Text> 
        </View> 
        </TouchableOpacity>
       </View> 
      <Text style={styles.conheca}>Conheça nossas Redes Sociais e Contato</Text> 
        <View style={styles.redes}>
        <TouchableOpacity style={styles.logo} onPress={()=>{Linking.openURL('https://facebook.com')}}> 
          <Ionicons name='logo-facebook' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo} onPress={()=>{Linking.openURL('https://instagram.com')}}> 
          <Ionicons name='logo-instagram' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo} onPress={()=>{Linking.openURL('https://youtube.com')}}> 
          <Ionicons name='logo-youtube' color='white' size={30}/> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.logo} onPress={()=>{Linking.openURL('https://gmail.com')}}> 
          <Ionicons name='mail-open' color='white' size={30}/> 
        </TouchableOpacity> 
      </View> 
    <View style={styles.body}>
      <Image style={styles.levi} source={levi}/> 
      <View style={styles.apresentacao}> 
        <Text style={styles.descricao}>DESCRIÇÃO:</Text> 
        <Text style={styles.conheca2}>{frase}</Text>  
      </View> 
    </View> 
    <TouchableOpacity style={styles.whats} onPress={()=>{Linking.openURL('https://web.whatsapp.com')}}> 
      <Image source={whatsapp} style={styles.whatsapp} /> 
    </TouchableOpacity> 
    <Image source={vialactea } /> 
    </View> 
  ); 
} 

const largura = Dimensions.get('window').width 
const altura = Dimensions.get('window').height 

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black', 
    overflow: 'hidden', 
    borderWidth:0, 
  }, 
  top:{
    backgroundColor: '#303030', 
    height: 50, 
    width: largura, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 

  }, 
  scroll:{
    width: largura, 
    flexWrap: 'wrap', 
    height: 200, 
    overflow: 'hidden', 
    flexDirection: 'row', 

  }, 
  scrollx: {
    width: largura, 
    height: 200, 
    backgroundColor: 'gray', 
    justifyContent: 'center', 
    alignItems: 'center', 

  }, 
  descricao: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
  }, 
  imgs: {
    width: largura, 
    height: 200, 
    resizeMode: 'cover', 
    zIndex:1, 
    position: 'absolute', 
    opacity: 0.6,   

  }, 

  bemvindo: {
    zIndex: 2, 
    color: 'white',  
    fontSize: 20, 
    fontWeight: '500', 
    opacity: 1, 

  }, 
  redes:{
    width: largura, 
    height: 70, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    backgroundColor: 'black', 
    borderBottomWidth: 2, 
    borderBottomColor: 'white', 
  }, 
  logo: {
    width: 50,  
    height: 50, 
    borderRadius: 4,  
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'purple', 
  }, 
  conheca:{
    width: largura, 
    backgroundColor: 'black', 
    flexDirection: 'row', 
    color: 'white', 
    fontWeight: '500', 
  }, 
  levi:{
    height: 180, 
    width: 100,  
  }, 
  body:{
    width: largura, 
    marginTop: 30, 
    height: 200, 
    flexDirection: 'row', 
    zIndex: 2, 
  }, 
  apresentacao: { 
    width: largura-200, 
    height: 200, 
    marginLeft: 10, 
  }, 
  
  conheca2:{ 
    width: largura-130, 
    flexDirection: 'row', 
    color: 'white', 
    fontWeight: '500', 
    zIndex: 3, 
  }, 
  whatsapp: {
    width: 80, 
    height: 80, 
    resizeMode: 'cover', 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    zIndex: 3, 
  }, 
  via: {
    width: largura, 
    height: 'auto', 
  }, 
  whats: { 
    width: 80, 
    height: 80, 
    bottom: 0, 
    position: 'absolute', 
    resizeMode: 'cover', 
    right: 0, 
    zIndex: 3,  
  }
}); 
 
