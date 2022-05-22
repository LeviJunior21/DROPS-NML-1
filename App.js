import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer'; 
const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator() 
import {View, Dimensions, StatusBar, Text, TouchableOpacity, Image, Linking, StyleSheet} from 'react-native'; 
import HomeScreen from './App/screens/HomeScreen';
import DetailsScreen from './App/screens/DetailsScreen';
import Home from './App/screens/Home'; 
import Constants from 'expo-constants'; 
import Questionario  from './App/screens/Game'; 
import Pontuacao from './App/screens/pontos'; 
import perguntas from './App/Data/data'; 
import DrawerItemss from './App/Drawer/Drawer_Container'; 
import Login from './App/screens/login'; 
import Info from './App/screens/DetalhesPlaneta'; 

function App(){ 
  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName='Inicio' screenOptions={{headerShown: false}} drawerContent={props=><DrawerItems{...props}/>}> 
        <Drawer.Screen name='Inicio' component={NavigationStack}></Drawer.Screen> 
        <Drawer.Screen name='Planetas' component={HomeScreen}></Drawer.Screen> 
        <Drawer.Screen name='Games' component={Home_Game}></Drawer.Screen> 
        <Drawer.Screen name='Login' component={Login}></Drawer.Screen> 
      </Drawer.Navigator> 
    </NavigationContainer>
  );
} 

const width = Dimensions.get('window').width 

function DrawerItems(props){ 
  const frase = 'A ideia do projeto é viabilizar essa interação ALUNO(A) – MUNDO MATERIAL [experimento] em pequenas intervenções, aplicada por um grupo de licenciandos(as), abstendo o(a) professor(a) de qualquer intervenção na atividade experimental. Caso ele(a) queira, pode criar uma sequência, anterior ou posterior a nossa atividade.'

  return( 
    <View style={{flex: 1, backgroundColor: 'white'}}> 
      <StatusBar backgroundColor='white'/> 
      <View style={{width: 'auto', height: 110, justifyContent:'space-between', alignItems: 'center',backgroundColor: 'purple', flexDirection: 'row', marginTop: Constants.statusBarHeight, }}> 
        <TouchableOpacity style={{width: 90, height: 90, borderRadius: 10, backgroundColor: 'white', }} onPress={()=>{
        Linking.openURL('https://drops-coronadrops.web.app') 
        }}> 
          <Image style={{width: 90, height: 90, }} 
          source={{uri: 'https://drops-coronadrops.web.app/static/media/logo_drops.d2766fbd6fda51e18e27.png'}}/> 
        </TouchableOpacity> 
        <View style = {{width: 200, height: 100, marginLeft: 10, }}> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}} numberOfLines={1}>DROPS</Text> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14}} numberOfLines={1}>NO MUNDO DA LUA</Text> 
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14, marginTop: 10, }} numberOfLines={1}>Física - UFCG </Text> 
        </View>      
      </View> 
      <View style={{width: 'auto', backgroundColor: 'red', }}/> 
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'white', }}> 
      <DrawerItemList {...props} /> 
      </DrawerContentScrollView>  
      <View style={{flex: 1, marginTop: -20, paddingHorizontal: 10, }}> 
        <Text>Sobre o DROPS NO MUNDO DA LUA: </Text> 
        <Text style={{fontStyle: 'italic', marginTop: 10, }}>{frase}</Text> 
      </View> 

      <View style={{width: 'auto', alignItems: 'center'}}> 
        <Text style={{position: 'absolute', bottom: 0, textAlign: 'center'}}>Versão 1.0.0</Text> 
      </View> 
    </View> 
  )
}

function NavigationStack(){ 
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName={'Home'}> 
      <Stack.Screen name={'Home'} component={Home} /> 
      <Stack.Screen name={'Homes'} component={HomeScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} /> 
      <Stack.Screen name={'Games'} component={Home_Game}/> 
      <Stack.Screen name={'Info'} component={Info}/> 
      <Stack.Screen name={'Pontos'} component={Pontuacao}/> 
       {perguntas.map(itens=>
        <Stack.Screen name = {itens.rota} component={itens.component}></Stack.Screen> 
      )} 
    </Stack.Navigator>
  )
}

const Home_Game = ({navigation}) => { 
  const pontos = []
  return(
    <View style={Home_Styles.main}> 
      <TouchableOpacity style={Home_Styles.touchable} 
      onPress={()=>{navigation.navigate('Rota1', {perguntas: perguntas, id: 0, pontos: pontos})}}> 
        <Text style={Home_Styles.texto}> TOQUE PARA INICIAR O QUESTIONÁRIO</Text> 
      </TouchableOpacity> 
    </View>
  )
}

const Home_Styles = StyleSheet.create({
  main: {
    flex:1, 
    backgroundColor: 'purple', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  touchable: {
    width: 300, 
    height: 50, 
    backgroundColor: 'white', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  texto: {
    fontWeight: 'bold', 
  }, 
})

export default App; 