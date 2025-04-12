import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetalhesScreen from './screen/DetalhesScreen';
import SobreScreen from './screen/SobreScreen';

import Button1 from './Components/Button1';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    /*<View style={styles.container}>
      <Text>CALCULADORA!</Text>
      <Button1></Button1>
      <StatusBar style="auto" />
    </View>*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
      <StatusBar styles="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




