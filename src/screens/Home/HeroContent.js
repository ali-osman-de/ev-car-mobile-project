import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const HeroContent = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.welcomeText}>Hosgeldiniz &#128075;</Text>
            <ImageBackground
                source={require('../../../assets/carev.png')}
                style={styles.imageBackground}
            >
                <Text style={styles.imageBackgroundText}>
                    Find Your Dream Car
                </Text>
            </ImageBackground>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Your Dream Car"
                placeholderTextColor="#666"
            />
        </View>
    )
}

export default HeroContent

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    welcomeText: {
        marginTop: 50,
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    imageBackground: {
        borderRadius: 25,
        overflow: 'hidden',
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackgroundText: {
        position: 'absolute',
        top: 120,
        textAlign: 'start',
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    },
    searchBar: {
        position: 'absolute',
        marginTop: 500,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '80%',
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 14,
        fontWeight: 'light',
        color: 'black',
    }
})