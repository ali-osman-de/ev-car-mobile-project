import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Categoriies = () => {
  const categories = [{
    id: 1,
    name: 'Sedan',
    image: require('../../../assets/sedan.png')
  },
  {
    id: 2,
    name: 'SUV',
    image: require('../../../assets/suv.png')
  },
  {
    id: 3,
    name: 'Truck',
    image: require('../../../assets/truck.png')
  },
  {
    id: 4,
    name: 'Van',
    image: require('../../../assets/van.png')
  }
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoriesContainerOpacity}>
            <Image source={category.image} style={styles.opacityImage} />
            <Text style={styles.opacityText}>{category.name}</Text>
          </TouchableOpacity>
        )
        )}
      </View>
    </View>
  )
}

export default Categoriies

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  categoriesContainerOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  opacityImage: {
    width: 200,
    height: 200,
    marginBottom: 5,
    borderRadius: 15,
  },
  opacityText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  }
})