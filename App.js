import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoute from './src/navigator/NavigationRoute';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { fetchCars } from './src/redux/carSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AppInner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <NavigationRoute />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}
