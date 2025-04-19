import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const CardComponent = ({
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
}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('CarDetails', {
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
            })}
        >
            <Image
                source={{ uri: car_image }}
                style={styles.image}
                defaultSource={require('../../../assets/icon.png')}
                onError={(error) => console.log('Image loading error:', error)}
                resizeMode="cover"
            />
            <Text style={styles.title}>{car_name}</Text>
            <Text style={styles.description}>{car_model}</Text>
        </TouchableOpacity>
    )
}

export default CardComponent

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
})
