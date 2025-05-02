import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';

const AllProduct = () => {
  const { data: carsData, loading, error } = useSelector((state) => state.cars);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>All Electric Vehicles</Text>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}

        {carsData.map((car) => (
          <CardComponent
            key={car.id}
            car_name={car.car_name}
            car_model={car.car_model}
            car_image={car.car_image}
            style={styles.cardComponent}
            acceleration={car.acceleration}
            autonomous_driving={car.autonomous_driving}
            battery_capacity={car.battery_capacity}
            car_range={car.car_range}
            car_year={car.car_year}
            charge_time={car.charge_time}
            country_of_origin={car.country_of_origin}
            drive_type={car.drive_type}
            fast_charge_support={car.fast_charge_support}
            height={car.height}
            length={car.length}
            manufacturer={car.manufacturer}
            price={car.price}
            seating_capacity={car.seating_capacity}
            tax_incentive={car.tax_incentive}
            top_speed={car.top_speed}
            weight={car.weight}
            width={car.width}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AllProduct;

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
  cardComponent: {
    marginBottom: 20,
  },
});
