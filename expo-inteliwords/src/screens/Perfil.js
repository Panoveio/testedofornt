import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Modal,
    Alert,
    PendingView,
    TouchableHighlight,
    TextInput,
    Alert
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { vw, vh } from 'react-native-expo-viewport-units';


//import AsyncStorage from '@react-native-async-storage/async-storage';
//import api from '../services/api';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            url: '',
            modalVisible: false,
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.main}>
                {/* Cabeçalho - Header */}
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Text style={styles.mainHeaderText}>Perfil</Text>
                        {/* <TouchableOpacity
                        // onPress={onPress}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} size={32} color={"#FA7B3B"} />
                        </TouchableOpacity> */}
                        <Modal

                            style={{ height: 600, width: 800 }}
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                this.setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>

                                    <View style={styles.mainBodyImg} />
                                    <FontAwesomeIcon style={styles.foto} icon={faPlusSquare} size={32} color={"#FFF"} />

                                    <View style={styles.inputNome} >
                                        <Text style={styles.modalText}>Nome</Text>
                                        <TextInput style={styles.input}></TextInput>
                                    </View>
                                    <View style={styles.botoes}>
                                        <TouchableOpacity
                                            style={[styles.button, styles.buttonCloseCancelar]}
                                            onPress={() => this.setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyleCancelar}>Cancelar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => this.setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyleEditar}>Editar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <TouchableHighlight
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => this.setModalVisible(true)}
                        >
                            <TouchableHighlight
                            // onPress={onPress}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} size={32} color={"#FA7B3B"} />
                            </TouchableHighlight>
                        </TouchableHighlight>
                    </View>
                </View>

                {/* Corpo - Body - Section */}
                <View style={styles.mainBody}>
                    {/* <Image 
                            source={imagem vinda da API}
                            style={styles.mainBodyImg}
                        /> */}
                    <View style={styles.mainBodyImg} />
                    {/* <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Camera')}>
                            <Image
                            source={{ uri: `data:image/png;base64,${this.state.url}` }}
                            style={styles.mainBodyImg}
                            />
                        </TouchableOpacity> */}
                    <View style={styles.mainBodyInfo}>

                        <Text style={styles.mainBodyText}>Priscila</Text>
                        <Text style={styles.mainBodyText}>Pri@123</Text>
                        {/* <Text style={styles.mainBodyText}>{this.state.nome}</Text>
                        <Text style={styles.mainBodyText}>{this.state.email}</Text> */}
                        <TouchableOpacity
                            // onPress={onPress} 
                            style={styles.buttonDesativarConta}
                        >
                            <Text style={styles.buttonText}>Desativar Conta</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.btnLogout}
                        onPress={this.realizarLogout}>
                        <Text style={styles.btnLogoutText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        width: vw(80),
        //backgroundColor: 'red',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    // texto do cabeçalho
    mainHeaderText: {
        fontSize: 24,
        letterSpacing: 2,
        color: '#FFF',
        //fontFamily: 'Open Sans',
    },

    buttonDesativarConta: {
        width: vw(50),
        height: vh(7),
        borderRadius: 7,
        backgroundColor: '#B40000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset:
        {
            width: 1,
            height: 4,
        },
        shadowColor: '#910606',
        shadowOpacity: 1,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
    },

    // conteúdo do body
    mainBody: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },

    mainBodyInfo: {
        alignItems: 'center',
    },

    mainBodyImg: {
        backgroundColor: '#ccc',
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    mainBodyText: {
        color: '#BFBFBF',
        fontSize: 22,
        marginBottom: 20,
    },
    // botão de logout
    btnLogout: {
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(45),
        height: vh(6),
    },
    // texto do botão
    btnLogoutText: {
        fontSize: 22,
        //fontFamily: 'Open Sans',
        color: '#BFBFBF',
    },



    //Modal

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 22
    },

    modalView: {
        width: 300,
        height: 350,
        backgroundColor: "#333333",
        borderRadius: 15,
        //padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#FA7B3B',
        borderWidth: 1,
    },

    foto: {
        position: 'absolute',
        marginTop: 33,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        borderRadius: 7,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        //backgroundColor: "#F194FF",
    },
    buttonCloseCancelar: {
        borderColor: "#FA7B3B",
        borderWidth: 2,
        backgroundColor: "transparent",
        width: 95,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonClose: {
        backgroundColor: "#FA7B3B",
        width: 95,
        alignItems: "center",
        justifyContent: "center",
    },

    textStyleCancelar: {
        color: "#FFF",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 16,
    },
    textStyleEditar: {
        fontSize: 16,
        color: "#000",
        fontWeight: "700",
        textAlign: "center"
    },

    inputNome: {
        height: vh(9),
        justifyContent: "space-between",
    },

    modalText: {
        //marginBottom: 15,
        color: "#FFF",
        fontSize: 22,
        fontWeight: "400",
    },

    input: {
        borderBottomColor: '#FA7B3B',
        borderBottomWidth: 3,
        width: vw(60),
    },

    botoes: {
        flexDirection: 'row',
        width: vw(60),
        justifyContent: "space-between",
    },
});