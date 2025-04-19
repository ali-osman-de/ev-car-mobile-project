import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

const CarDetails = ({ route }) => {
  const { 
    car_name, 
    car_model, 
    car_image,
    acceleration,
    autonomous_driving,
    battery_capacity,
    car_range,
    car_year,
    charge_time,
    country_of_origin,
    drive_type,
    fast_charge_support,
    height,
    length,
    manufacturer,
    price,
    seating_capacity,
    tax_incentive,
    top_speed,
    weight,
    width
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: car_image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.carName}>{car_name}</Text>
        <Text style={styles.carModel}>{car_model}</Text>
        
        <View style={styles.specificationContainer}>
          <SpecItem label="Manufacturer" value={manufacturer} />
          <SpecItem label="Year" value={car_year} />
          <SpecItem label="Price" value={`$${price}`} />
          <SpecItem label="Acceleration" value={`${acceleration} sec`} />
          <SpecItem label="Top Speed" value={`${top_speed} km/h`} />
          <SpecItem label="Battery Capacity" value={`${battery_capacity} kWh`} />
          <SpecItem label="Range" value={`${car_range} km`} />
          <SpecItem label="Charge Time" value={`${charge_time} hours`} />
          <SpecItem label="Drive Type" value={drive_type} />
          <SpecItem label="Seating Capacity" value={seating_capacity} />
          <SpecItem label="Dimensions" value={`${length}m × ${width}m × ${height}m`} />
          <SpecItem label="Weight" value={`${weight} kg`} />
          <SpecItem label="Country" value={country_of_origin} />
          <SpecItem label="Fast Charge" value={fast_charge_support ? "Yes" : "No"} />
          <SpecItem label="Autonomous Driving" value={autonomous_driving ? "Yes" : "No"} />
          <SpecItem label="Tax Incentive" value={tax_incentive ? "Yes" : "No"} />
        </View>
      </View>
    </ScrollView>
  )
}

const SpecItem = ({ label, value }) => (
  <View style={styles.specItem}>
    <Text style={styles.specLabel}>{label}:</Text>
    <Text style={styles.specValue}>{value}</Text>
  </View>
);

export default CarDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  image: {
    width: width,
    height: width * 0.7,
  },
  detailsContainer: {
    padding: 20,
    marginBottom:45,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  carModel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  specificationContainer: {
    marginTop: 10,
  },
  specItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  specLabel: {
    fontSize: 16,
    color: '#666',
  },
  specValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  }
})
