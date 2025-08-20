import {View, Text, StyleSheet} from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
        <Text>Welcome to the Dashboard!</Text>
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