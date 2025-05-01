import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings/Settings';
import Privacy from '../screens/Settings/Privacy';
import Content from '../screens/Settings/Content';


const Stack = createStackNavigator();


function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InSetting" component={Settings} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
}

export default SettingsStack;

