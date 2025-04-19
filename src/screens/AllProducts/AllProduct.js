import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'

const AllProduct = () => {
  const [carsData, setCarsData] = useState([])


  const data = {

    "acceleration": 3.1,
    "autonomous_driving": true,
    "battery_capacity": 100,
    "car_image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1565798338/autoexpress/2019/08/01_7.jpg",
    "car_model": "Long Range",
    "car_name": "Tesla Model S",
    "car_range": 600,
    "car_year": 2023,
    "charge_time": 8,
    "country_of_origin": "USA",
    "drive_type": "AWD",
    "fast_charge_support": true,
    "height": 1.44,
    "id": 1,
    "length": 4.96,
    "manufacturer": "Tesla",
    "price": 80000,
    "seating_capacity": 5,
    "tax_incentive": true,
    "top_speed": 250,
    "weight": 2200,
    "width": 1.96

  }

  useEffect(() => {
    fetchCars();
  }, [])


  async function fetchCars() {
    fetch('https://evcarbackend.onrender.com/cars')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setCarsData(json)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>All Electric Vehicles</Text>

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
  )
}

export default AllProduct

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
  cardComponent: {
    gap: 80
  }
})