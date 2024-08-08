import { createStackNavigator } from '@react-navigation/stack';
import CreateScheduleScreen from '../screens/CreateScheduleScreen'; 

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="CreateSchedule">
      <Stack.Screen name="Criar Escala" component={CreateScheduleScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;