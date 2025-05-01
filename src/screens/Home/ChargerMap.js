import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Linking, Animated, Image, Dimensions } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import combined_data from '../../../assets/combined_data.json';

export default function ChargerMap() {
  const [location, setLocation] = useState(null);
  const [visibleData, setVisibleData] = useState([]);
  const [region, setRegion] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Konum izni verilmedi');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 2,
        longitudeDelta: 2,
      });
    })();
  }, []);

  const handleRegionChangeComplete = (region) => {
    setRegion(region);

    const radiusInKm = 10;
    const nearbyData = combined_data.filter(item => {
      const dLat = (item.geometry_latitude - region.latitude) * 111;
      const dLng = (item.geometry_longitude - region.longitude) * 85;
      const distance = Math.sqrt(dLat * dLat + dLng * dLng);
      return distance < radiusInKm;
    });

    setVisibleData(nearbyData.slice(0, 1000));
  };

  const handleDirections = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const handleMarkerPress = (item) => {
    setSelectedMarker(item);

    slideAnim.setValue(Dimensions.get('window').height);
    fadeAnim.setValue(0);

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  };

  const closeInfoPanel = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: Dimensions.get('window').height,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start(() => {
      setSelectedMarker(null);
    });
  };

  if (!region) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Konum alınıyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chargers Map</Text>

      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={handleRegionChangeComplete}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {visibleData.map((item, index) => (
          <React.Fragment key={index}>
            <Marker
              coordinate={{
                latitude: item.geometry_latitude,
                longitude: item.geometry_longitude,
              }}
              title={item.providerCode}
              description={`Type: ${item.properties_type}`}
              onPress={() => handleMarkerPress(item)}
            >
            </Marker>
            <Circle
              center={{
                latitude: item.geometry_latitude,
                longitude: item.geometry_longitude,
              }}
            />
          </React.Fragment>
        ))}
      </MapView>

      {selectedMarker && (
        <Animated.View
          style={[
            styles.infoContainer,
            {
              transform: [{ translateY: slideAnim }],
              opacity: fadeAnim
            }
          ]}
        >

          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeInfoPanel}
          >
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>


          {selectedMarker.providerLogo && (
            <View style={styles.logoContainer}>
              <Image
                source={{ uri: selectedMarker.providerLogo }}
                style={styles.logo}
              />
            </View>
          )}


          <Text style={styles.locationName}>{selectedMarker.providerCode}</Text>
          <Text style={styles.infoText}>Type: {selectedMarker.properties_type}</Text>
          <Text style={styles.infoText}>Address: {selectedMarker.properties_locationName}</Text>


          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDirections(selectedMarker.geometry_latitude, selectedMarker.geometry_longitude)}
          >
            <Text style={styles.buttonText}>Yol Tarifi Al</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'start',
    marginVertical: 10,
  },
  map: {
    flex: 1,
    height: 400,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});