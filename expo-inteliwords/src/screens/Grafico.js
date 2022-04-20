import React, { Component } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Grafico extends Component {
 
    irPerfil = () => {
        this.props.navigation.navigate("Perfil")
      }
  
      render(){
        return(
            <View style={styles.main}>
                    {/* Cabeçalho - Header */}
                    <View style={styles.mainHeader}>
                        <View style={styles.mainHeaderRow}>
                            <Text style={styles.mainHeaderText}>Gráfico de Desempenho</Text>
                            <TouchableOpacity onPress={() => this.irPerfil()}
                                style={styles.imgPerfil}
                            >
                                <Image
                                    source={require('../assets/persona.png')}                                
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
    
                    {/* Corpo - Body - Section */}
                    <View style={styles.mainBody}>
                    <Text>Gráfico</Text>
                    </View>
                </View>
        )
      }
   
}


const styles = StyleSheet.create({
    // conteúdo da main
    main: {
        flex: 1,
        backgroundColor: '#454545',
    },
    // cabeçalho
    mainHeader: {
        flex: 0.9,
        backgroundColor: '#292929',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeaderRow: {
        width: vw(85),
        //backgroundColor: 'blue',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    // texto do cabeçalho
    mainHeaderText: {
        width: vw(45),
        //backgroundColor: 'red',
        fontSize: 24,
        letterSpacing: 2,
        color: '#FFF',
        //fontFamily: 'Open Sans',
    },
    
    imgPerfil: {
      //  backgroundColor: 'pink',
        marginBottom: 15,
    },
   
    // conteúdo do body
    mainBody: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
   }, 

});
