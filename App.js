import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoute from './src/navigator/NavigationRoute';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
}