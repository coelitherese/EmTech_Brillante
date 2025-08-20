import {View, Text, StyleSheet, Button} from 'ract-native';
import { Button } from 'react-native';

export default function Page1({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 1</Text>
      <Text>Welcome to Page 1!</Text>
      <Button title="Go to page 2" onPress={() => navigation.navigate('page2')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF2EB',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 45,
    color: '#F564A9',
    marginBottom: 10,
    fontWeight: 'bold',
  }
})