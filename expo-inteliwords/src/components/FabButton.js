import React, { Component, useRef } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image, Animated } from 'react-native'
// import { Modalize } from 'react-native-modalize'

// const modalizeRef = useRef(null);

function onOpen(){
    modalizeRef.current?.open();
}

export default class FabButton extends Component {
    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true
        }).start();

        this.open = !this.open;
    }

    render(){

        const folderStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -60]
                    })
                }
            ]
        }

        const pencilStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -115]
                    })
                }
            ]
        }

        const rotation  = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        return(
            <View style={[styles.container, this.props.style]}>

                <TouchableWithoutFeedback onPress={onOpen}>
                    <Animated.View style={[styles.button, styles.subMenu, pencilStyle]}>
                        <Image
                            source={require('../assets/pencilIcon.png')}
                            />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={onOpen}>
                    <Animated.View style={[styles.button, styles.subMenu, folderStyle]}>
                        <Image
                            source={require('../assets/folderIcon.png')}
                            />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <Image
                            source={require('../assets/plusIcon.png')}
                            style={styles.plusIcon}
                            />
                    </Animated.View>
                </TouchableWithoutFeedback>

                {/* <Modalize
                    ref={modalizeRef}
                    snapPoint={180}
                >
                    <View
                        style={{
                            flex: 1,
                            height: 180,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity style={[styles.btn, { backgroundColor: '#29AE19' }]}>
                            <Text>EDITAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: '#FF0000' }]}>
                            <Text>EXCLUIR</Text>
                        </TouchableOpacity>
                        
                    </View>
                </Modalize> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },

    button: {
        position: 'absolute',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    menu: {
        backgroundColor: '#FE7B1D'
    },

    subMenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FE7B1D'
    },

    plusIcon: {
        width: 20,
        height: 20
    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 7
    }
})
