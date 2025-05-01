import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const AICarDreamer = () => {
  const navigation = useNavigation();
  
    const handleLetStart = () => {
        navigation.navigate('AIContent')
    };

    return (
        <View style={styles.dreamCarContainer}>
            <Image
                source={require('../../../assets/AIcontent.jpg')}
                style={styles.dreamCarImage}
            />
            <Text style={styles.dreamCarText}>
                AI Car Dreamer!
            </Text>
            <Text style={styles.dreamCarAltText}>
                You can find your dream car with AI!
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={handleLetStart}>
                    <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AICarDreamer

const styles = StyleSheet.create({
    dreamCarContainer: {
        height: 400,
        borderRadius: 10,
        padding: 15,
        marginVertical: 40,
        marginHorizontal: 20,
        borderColor: 'lightgray',
        borderRadius: 25
    },
    dreamCarImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginHorizontal: 14,
    },
    dreamCarText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    dreamCarAltText: {
        color: '#6c757d',
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 262,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f59c3d',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})