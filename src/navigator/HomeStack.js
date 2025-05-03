import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import SelectedCategory from '../screens/Home/Categories/SelectedCategory';
import AIContent from '../screens/Home/AICarDreamer/AIContent';
import CarDetails from '../screens/AllProducts/CarDetails'; // <- Eksik import tamamlandı

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="SelectedCategory" component={SelectedCategory} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="AIContent" component={AIContent} />
    </Stack.Navigator>
  );
}

export default HomeStack;
