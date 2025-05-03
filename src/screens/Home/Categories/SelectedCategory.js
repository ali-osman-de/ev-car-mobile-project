import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsByCategory, clearData } from '../../../redux/carByCategorySlice';

const SelectedCategory = ({ route }) => {
  const { categoryName } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { data: cars, loading, error } = useSelector(state => state.carsByCategory);


  const handleCardPress = (car) => {
    navigation.navigate('CarDetails', { ...car });
  };

  useEffect(() => {
    dispatch(clearData());
    dispatch(fetchCarsByCategory(categoryName));
  }, [categoryName]);

  return (
    <ScrollView contentContainerStyle={styles.headerContainer}>
      <Text style={styles.header}>All {categoryName}s</Text>

      {loading &&
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text>Yükleniyor...</Text>
        </View>
      }
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {cars.map((car) => (
        <TouchableOpacity
          key={car.id}
          style={styles.card}
          onPress={() => handleCardPress(car)}
        >
          <Image
            source={{ uri: car.car_image }}
            style={styles.image}
            defaultSource={require('../../../../assets/icon.png')}
            onError={(error) => console.log('Image loading error:', error)}
            resizeMode="cover"
          />
          <Text style={styles.title}>{car.car_name}</Text>
          <Text style={styles.description}>{car.car_model}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SelectedCategory;

const styles = StyleSheet.create({
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
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 90
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  }
});
