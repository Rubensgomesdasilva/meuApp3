import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button1 from './Components/Button1';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>CALCULADORA!</Text>
      <Button1></Button1>
      <StatusBar style="auto" />
    </View>
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




