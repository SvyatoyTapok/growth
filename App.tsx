import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import { useFonts } from 'expo-font';
const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    InterRegular: require('./fonts/Inter-Regular.ttf'),
    InterLight: require('./fonts/Inter-Light.ttf'),
    InterBold: require('./fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;