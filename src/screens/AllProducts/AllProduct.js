import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

const AllProducts = () => {
  const { data: carsData, loading, error } = useSelector((state) => state.cars);
  const navigation = useNavigation();

  const handleCardPress = (car) => {
    navigation.navigate('CarDetails', { ...car });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>All Electric Vehicles</Text>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}

        {carsData.map((car) => (
          <TouchableOpacity
            key={car.id}
            style={styles.card}
            onPress={() => handleCardPress(car)}
          >
            <Image
              source={{ uri: car.car_image }}
              style={styles.image}
              defaultSource={require('../../../assets/icon.png')}
              onError={(error) => console.log('Image loading error:', error)}
              resizeMode="cover"
            />
            <Text style={styles.title}>{car.car_name}</Text>
            <Text style={styles.description}>{car.car_model}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    paddingBottom: 100,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 70,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '95%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
