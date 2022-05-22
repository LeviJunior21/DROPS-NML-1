import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, TouchableOpacity, ImageBackground, TextInput, ActivityIndicator, Image,} from 'react-native'; 
import {Checkbox} from 'react-native-paper'; 
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons'; 
import * as ImagePicker from 'expo-image-picker'; 
import {useNavigation} from '@react-navigation/native'; 
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const {width, height} = Dimensions.get('window') 

export default function App(){ 
  const resposta = [] 
  return(
    <View style={styles.container}> 
    <StatusBar backgroundColor={'white'}/> 
      <Top/> 
      <Pass/> 
    </View> 
  )
}

function Top(){ 
  const navigation = useNavigation() 
  return(
    <View style={styletop.main}>
      <TouchableOpacity style={styletop.menu} onPress={()=>{navigation.openDrawer()}}>  
        <Icon name='menu' size={30} color={'white'}/> 
      </TouchableOpacity> 
      <Text style={styletop.text}>DROPS - Login</Text> 
    </View> 
  )
}

function Body(props){
  const [imagem, setImagem ] = React.useState('https://cinefila.mx/po/wp-content/uploads/2020/06/Aqui-esta-o-que-sabemos-sobre-o-pre-show-de-Darth.jpg') 
  const dir = 'https://cinefila.mx/po/wp-content/uploads/2020/06/Aqui-esta-o-que-sabemos-sobre-o-pre-show-de-Darth.jpg'
   let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult); 
    setImagem(pickerResult['uri']) 
    setIndicator(false) 
  }; 

  const [indicator, setIndicator] = React.useState(false) 
  return(
    <View style={bodystyle.main}> 
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 20, }}> 
      {(imagem==dir)?'Escolha uma foto!':'Sua foto foi carregada!'} 
      </Text> 
      <TouchableOpacity style={bodystyle.photo} onPress={()=>{openImagePickerAsync(); setIndicator(!indicator)}}> 
        <ImageBackground style={bodystyle.background} source={{uri: imagem}}> 
          {indicator?
          <ActivityIndicator size={'large'} />:(imagem==dir)?
            <Icon name='camera' size={50} color={'white'}></Icon>:<></> 
          }
        </ImageBackground> 
      </TouchableOpacity> 
    {(imagem==dir)? 
      <Text style={bodystyle.text1}>Caso não escolha uma foto, a imagem acima será a imagem padrão.</Text>: 
      <Text style={bodystyle.text1}>Muito bem! Agora complete as demais informações para que você possa criar sua conta.</Text>}  
    </View>  
  )
}


function Pass(){ 
    const navigation = useNavigation() 
    const termosapp = 'Termos do App: \n\nVocê está ciente de que o DROPS é um aplicativo educacional e não utlizaremos as fotos ao criar a conta para outros fins.\nNote também que o aplicativo não obriga o envio de fotos pois já vem com imagem padrão.' 
    return (
      <View style={styles.container}>
        <ProgressSteps>
          <ProgressStep label="Foto"> 
            <View style={{ alignItems: 'center' }}>
              <Body/>
            </View>
          </ProgressStep>
          <ProgressStep label="Perfil" > 
            <View> 
              <Text style={questions.text}>Nome:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              <Text style={questions.text}>Sobrenome:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              <Text style={questions.text}>Gênero:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              <Text style={questions.text}>Idade:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              <Text style={questions.text}>Grau de Escolaridade:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              <Text style={questions.text}>Cidade:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
              
            </View>
          </ProgressStep>
          <ProgressStep label="Conta"> 
            <View> 
              <Text style={questions.text}>Email:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput>
              <Text style={questions.text}>Senha:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput>  
              <Text style={questions.text}>Repita a senha:</Text> 
              <TextInput style={questions.input} numberOfLines={1} onChangeText={(el)=>{}}></TextInput> 
            </View>
          </ProgressStep>
          <ProgressStep label="Termos" >
            <View style={{ alignItems: 'center' }}>
              <View style={termos.main}>
                <View style={termos.img}> 
                  <Image style={{width: 100, height: 100,}} source={{uri:'https://drops-coronadrops.web.app/static/media/logo_drops.d2766fbd6fda51e18e27.png'}}/> 
                </View> 

                  <Text style={{color: 'white', fontWeight: 'bold', width: 0.8*width, flexWrap: 'wrap', }}>{termosapp}</Text> 
                  <View style={{position: 'relative', bottom: 0, flexDirection: 'row', width: 0.8*width, height: 40, alignItems: 'center'}}> 
                    <Checkbox/> 
                    <Text style={{color: 'white', fontWeight: 'bold', }}>Concordo com os termos. </Text> 
                    <View style={{position: 'absolute', right: 0, }}> 
                      <ActivityIndicator size={'small'} color={'white'}/> 
                    </View> 
                  </View> 
              </View> 
            </View>
          </ProgressStep>
          <ProgressStep label="Concluído" onSubmit={()=>{navigation.navigate('Home')}}> 
            <View style={{ alignItems: 'center' }}> 
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, }}>
                Conta criada com sucesso!
              </Text>  
              <Image style={{width: 0.8*width, height: 0.8*width,}} source={{uri:'https://drops-coronadrops.web.app/static/media/logo_drops.d2766fbd6fda51e18e27.png'}}/> 
            </View>
          </ProgressStep>


        </ProgressSteps>
      </View>
    ); 
}

const styles2 = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

const styles = StyleSheet.create({
  container: {
    width: width, 
    flex: 1, 
    height: height, 
    overflow: 'hidden', 
    backgroundColor: 'black', 
  },
  input: {
    width: 0.8*width, 
    height: 40, 
    backgroundColor: 'white', 
    borderColor: 'white', 
    fontWeight: 'bold', 
    borderWidth: 2, 
    borderRadius: 10, 
    marginTop: 10, 
    marginLeft: 4, 
  }
});

const questions = StyleSheet.create({
  text: {
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, 
    marginle: 0, 
  }, 

  input: {
    width: 0.8*width, 
    height: 40, 
    backgroundColor: 'white', 
    borderColor: 'white', 
    fontWeight: 'bold', 
    borderWidth: 2, 
    borderRadius: 10, 
    marginTop: 10, 
    marginLeft: 4, 
  }

})

const bodystyle = StyleSheet.create({ 
  main: { 
    width: width, 
    height: 320, 
    overflow: 'hidden', 
    alignItems: 'center', 
    paddingVertical: 20, 
    marginTop: 30, 
  },
  photo: {
    width: 160,
    height: 160, 
    borderRadius: 80, 
    overflow: 'hidden', 
    backgroundColor: 'gray', 
  }, 
  background: {
    width: 160, 
    height: 160, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderColor: 'white', 
    borderRadius: 80, 
    },  
  text1: {
    color: 'white', 
    fontSize: 16, 
    widtth: width, 
    fontWeight: 'bold',
    marginTop: 10, 
    textAlign: 'center', 
  }, 
});

const styletop = StyleSheet.create({ 
  main: { 
    width: width, 
    height: 50, 
    marginTop: Constants.statusBarHeight, 
    backgroundColor: 'blue', 
    flexDirection: 'row', 
    alignItems: 'center',  
  }, 
  menu: {
    width: 30, height: 30, 
  }, 
  text: {
    fontSiz: 20, 
    fontWeight: 'bold', 
    color: 'white', 
    marginLeft: 10, 
  }, 
});

const termos = StyleSheet.create({
  main: {
    width: 0.9*width, 
    height: 0.6*height, 
    borderRadius: 10, 
    backgroundColor: 'purple', 
    justifyContent: 'space-between', 

  }, 
  img: {
    width: 0.9*width, 
    alignItems: 'center', 
  }
})
