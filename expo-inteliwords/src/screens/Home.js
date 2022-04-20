import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, SectionList } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import FabButton from '../components/FabButton.js'
import { vw } from 'react-native-expo-viewport-units';


const semCategoria = [
    { id: 1, title: 'Receipt' },
    { id: 2, title: 'Fruit' }
]

const backend = [
    { id: 3, title: 'IIS' },
    { id: 4, title: 'NuGet' },
    { id: 5, title: '.NET' },
    { id: 6, title: 'POO' }
]

const frontend = [
    { id: 7, title: 'HTML' },
    { id: 8, title: 'CSS' },
    { id: 9, title: 'JavaScript' },
    { id: 10, title: 'Bootstrap' }
]

const carros = [
    { id: 11, title: 'Celta' },
    { id: 12, title: 'Golf' },
    { id: 13, title: 'Siena' },
    { id: 14, title: 'Fusca' },
    { id: 15, title: 'HB20' },
    { id: 16, title: 'Corolla' }
]


export default class Home extends Component {

    irPerfil = () => {
      this.props.navigation.navigate("Perfil")
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView
                    scrollEnabled={true}
                    horizontal={false}
                    >
                    {/* View do Header */}
                   <View style={styles.headerMaior}>
                   <View
                        style={styles.header}
                    >
                        <View
                            style={styles.txtHeader}
                        >
                            <Text allowFontScaling={true}
                                style={styles.txtUp}
                            >Bem-vindo(a)</Text>
                            <Text allowFontScaling={true}
                                style={styles.txtDown}
                            >Priscila</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.irPerfil()}
                            style={styles.imgPerfil}
                        >
                            <Image
                                source={require('../assets/persona.png')}                                
                            />
                        </TouchableOpacity>

                    </View>
                   </View>

                    {/* View da Barra de Busca */}
                    <View
                        style={styles.searchBar}
                    >
                        <Text allowFontScaling={true}
                            style={styles.searchTxt}
                        >InteliWords</Text>
                        <TouchableOpacity
                            style={styles.searchIcon}
                        >
                            <Image
                                source={require('../assets/searchIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>


                    {/* View da Lista de Palavras */}
                    <ScrollView horizontal={true} >
                        <View>
                            <SectionList
                            style={styles.scroll}
                                nestedScrollEnabled={true}
                                horizontal={false}
                                sections={[
                                    { title: "Palavras sem Categoria", data: semCategoria },
                                    { title: "Backend", data: backend },
                                    { title: "Frontend", data: frontend },
                                    { title: "Carros", data: carros }
                                ]}

                                renderItem={({ item }) => (
                                    <View style={styles.row}>
                                        <Text allowFontScaling={true} style={styles.rowTxt}>
                                            {item.title}
                                        </Text>
                                    </View>
                                )}

                                renderSectionHeader={({ section }) => (
                                    <View style={styles.section}>
                                        <Text allowFontScaling={true} style={styles.sectionTxt}>
                                            {section.title}
                                        </Text>
                                    </View>
                                )}

                                keyExtractor={(item) => item.id}

                            />
                        </View>
                    </ScrollView>
                </ScrollView>
                <FabButton style={{ bottom: 75, right: 45 }} />
            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
       //flex: 1,
        backgroundColor: '#292929',
    },

    scroll: {
        flex: 1,
        width: vw(100)
    },

    headerMaior:{
        alignItems: 'center',
        //justifyContent: 'center',
    },
    
    header: {
        width: vw(85),
       // backgroundColor: 'red',
        flex: 1,
        height: 155,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //padding: 30,
    },

    txtHeader: {
    },

    txtUp: {
        fontSize: 34,
        color: '#FFF'
    },

    txtDown: {
        fontSize: 34,
        color: '#FE7B1D'
    },

    imgPerfil: {
        marginBottom: 15
    },

    // ------------------------

    searchBar: {
        height: 50,
        backgroundColor: '#151515',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30
    },

    searchTxt: {
        fontWeight: '500',
        color: '#FFF',
        fontSize: 24,
    },

    searchIcon: {
    },

    // ------------------------

    row: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
    },

    section: {
        backgroundColor: '#EFEEF0',
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10
    },

    rowTxt: {
        color: '#000'
    },

    sectionTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },

    // ----------------------------------


})