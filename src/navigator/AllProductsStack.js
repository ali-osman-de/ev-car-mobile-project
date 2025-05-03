import { createStackNavigator } from '@react-navigation/stack';
import AllProduct from '../screens/AllProducts/AllProduct';
import CarDetails from '../screens/AllProducts/CarDetails';
import SelectedCategory from '../screens/Home/Categories/SelectedCategory';


const Stack = createStackNavigator();


function AllProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllProduct" component={AllProduct} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
}

export default AllProductStack;

