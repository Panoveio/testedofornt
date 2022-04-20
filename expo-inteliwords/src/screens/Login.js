import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import auth from '@react-native-firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
import api from '../services/api';

// GoogleSignin.configure({
//   webClientId: '449522958062-lsg2h5lbo710pn7fcl7uohf2j6o13e9d.apps.googleusercontent.com',
// });

let userteste;

export default class Login extends Component {
  constructor(props) {
    super(props)
      this.nome,
      this.email,
      this.foto,
      this.webClient,
      this.nome
  }

  loginComGoogleAsync = async () => {
    // Get the users ID token
    //const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    //const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    //const userLogado = auth().signInWithCredential(googleCredential);

    //userLogado.then((user) => {
      // const token = user;
      // AsyncStorage.setItem('userToken', token);

      // const usuario = {
      //   "email": user.user.email,
      //   "nome": user.user.displayName,
      //   "userId": user.user.uid,
      //   "foto": user.user.photoURL,
      //   "ativado": true
      // }

      //api.post('/Login', usuario);
      this.props.navigation.navigate("TabBar")
    // })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />

        <Image
          source={require('../assets/banner.png')}
          style={styles.banner}
        />

        <TouchableOpacity style={styles.btn} onPress={() => this.loginComGoogleAsync()}>
          <Image
            source={require('../assets/logoGoogle.png')}
            style={styles.logoGoogle}
          />
          <Text style={styles.btnText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#292929'
  },

  containerLogo: {
    height: 90,
    justifyContent: 'space-between'
  },

  logo: {
    width: 314,
    height: 35
  },

  banner: {
    width: 300,
    height: 220
  },

  btn: {
    flexDirection: 'row',
    width: 315,
    height: 52,
    backgroundColor: '#292929',
    borderColor: '#FE7B1D',
    borderWidth: 3,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoGoogle: {
    marginRight: 10
  },

  btnText: {
    fontSize: 22,
    color: '#FE7B1D',
    marginLeft: 10
  }
})