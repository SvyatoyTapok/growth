import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import { useFonts } from 'expo-font';
import Register1 from './screens/Register1/Register1Screen';
const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    InterRegular: require('./fonts/Inter-Regular.ttf'),
    InterLight: require('./fonts/Inter-Light.ttf'),
    InterBold: require('./fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./fonts/Inter-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false, contentStyle: { backgroundColor: '#1C1C23' } }} name="Register1" component={Register1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;