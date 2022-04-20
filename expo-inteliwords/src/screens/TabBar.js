import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';


//home
import Home from './Home';

//gráfico
import Grafico from './Grafico';

//perfil
import Perfil from './Perfil';
//import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Tab = createBottomTabNavigator();

export default function TabBar() {

  return (

    <NavigationContainer independent={true} 
    style={styles.main}
    >

      <StatusBar hidden={false}  />

       <Tab.Navigator
        initialRouteName='Home'
        backgroundColoR
        style={styles.tabBar}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarShowIcon: true,
          tabBarActiveBackgroundColor: '#292929',
          tabBarInactiveBackgroundColor: '#292929',
          tabBarIcon: ({focused, size, color}) => {

            if (route.name === 'Home') {
              return (
                 iconName = focused
                  ? <FontAwesomeIcon icon={faHouse} size={ 28 } color={"#FA7B3B"} />
                  : <Image 
                  style={styles.tabBarIcon} 
                  source={require('../assets/house.png')}/>
              )
            }

            if (route.name === 'Grafico') {
              return (
                iconName = focused
                 ? <FontAwesomeIcon icon={ faChartLine } size={ 28 } color={"#FA7B3B"}/>
                 : <Image  
                style={styles.tabBarIcon}  
                 source={require('../assets/chart-line.png')}/>
             )
            }

            if (route.name === 'Perfil') {
              return (
                iconName = focused
                 ? <FontAwesomeIcon icon={ faUser } size={ 28 } color={"#FA7B3B"}/>
                 : <Image 
                style={styles.tabBarIcon} 
                 source={require('../assets/user.png')}/>
             )
            }
          },

          headerShown: false,
        })}
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Grafico" component={Grafico} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
   );

};

const styles = StyleSheet.create({

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 28,
    height: 28,
  },
  main: {
    flex: 1,
  },

});