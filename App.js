import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DatabaseProvider } from './database/useDatabse';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/tabNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/home';
import { CalendarScreen } from './screens/calendar';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DatabaseProvider>
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
          </Tab.Navigator>
      </NavigationContainer>
    </DatabaseProvider>

  );
}
