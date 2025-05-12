import { ImageBackground, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HeroContent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [greeting, setGreeting] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Günaydın');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('İyi Günler');
        } else {
            setGreeting('İyi Geceler');
        }
    }, []);


    const handleSearch = () => {
        if (!searchQuery.trim()) return;

        navigation.navigate('SearchResults', { query: searchQuery });
    };

    return (
        <ScrollView contentContainerStyle={styles.view}>
            <Text style={styles.welcomeText}>{greeting} 👋</Text>
            <ImageBackground
                source={require('../../../assets/carev.png')}
                style={styles.imageBackground}
            >
                <Text style={styles.imageBackgroundText}>Find Your Dream Car</Text>
            </ImageBackground>

            <TextInput
                style={styles.searchBar}
                placeholder="Search Your Dream Car"
                placeholderTextColor="#666"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch} // enter'a basınca navigate et
            />
        </ScrollView>
    );
};

export default HeroContent;

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
        fontWeight: 'bold',
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
    },
    carItem: {
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 10,
        borderRadius: 8,
    },
    carName: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
