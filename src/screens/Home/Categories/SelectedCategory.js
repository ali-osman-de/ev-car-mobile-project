import { View, Text } from 'react-native';
import React from 'react';

const SelectedCategory = ({ route }) => {
  const { categoryId, categoryName } = route.params;

  return (
    <View>
      <Text>Selected Category: {categoryName} (ID: {categoryId})</Text>
    </View>
  );
};

export default SelectedCategory;
