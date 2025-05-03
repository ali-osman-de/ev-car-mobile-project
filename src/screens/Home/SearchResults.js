import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native';

import { useNavigation } from "@react-navigation/native";


const SearchResults = ({ route }) => {
    const initialQuery = route.params?.query || '';
    const [inputQuery, setInputQuery] = useState(initialQuery);
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    const searchCars = async () => {
        if (!inputQuery.trim()) return;

        setLoading(true);
        setError(null);
        setCars([]); // Eski ürünleri gizle
        setSearchQuery(inputQuery);

        try {
            const response = await fetch(`https://evcarbackend.onrender.com/cars/search?q=${inputQuery}`);
            const data = await response.json();
            setCars(data);
        } catch (err) {
            console.error('Search error:', err);
            setError('Arama sırasında bir hata oluştu.');
        } finally {
            setLoading(false);
            Keyboard.dismiss();
        }
    };

    useEffect(() => {
        searchCars();
    }, []);

    const handleCardPress = (car) => {
        navigation.navigate('CarDetails', { ...car });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                style={styles.searchBar}
                value={inputQuery}
                onChangeText={setInputQuery}
                placeholder="Search electric cars..."
                onSubmitEditing={searchCars}
                returnKeyType="search"
            />

            <Text style={styles.header}>Search Results for "{searchQuery}"</Text>

            {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 30 }} />}
            {error && <Text style={styles.errorText}>{error}</Text>}

            {!loading && cars.length === 0 ? (
                <Text style={styles.noResultText}>No cars found.</Text>
            ) : (
                !loading && (
                    <View style={styles.resultsContainer}>
                        {cars.map((car) => (
                            <TouchableOpacity
                                key={car.id}
                                style={styles.card}
                                onPress={() => handleCardPress(car)}
                            >
                                <Image
                                    source={{ uri: car.car_image }}
                                    style={styles.image}
                                    defaultSource={require('../../../assets/icon.png')}
                                    onError={(e) => console.log('Image error:', e.nativeEvent.error)}
                                />
                                <Text style={styles.title}>{car.car_name}</Text>
                                <Text style={styles.description}>{car.car_model} - {car.car_year}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )
            )}
        </ScrollView>
    );
};

export default SearchResults;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e3e3e3',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 20
    },
    searchBar: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'lightgray',
        width: '80%',
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 14,
        color: 'black',
        marginBottom: 10
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    resultsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    card: {
        width: '48%',
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        marginBottom: 16,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    noResultText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 30,
    },
});
