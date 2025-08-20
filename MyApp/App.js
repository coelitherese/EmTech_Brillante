import { View, Text, Button, Image, ScrollView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://m.media-amazon.com/images/M/MV5BN2FlOWJlN2QtYjVmMS00OTE0LWIxNjctMWRlNWUxYjIzZThlXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg" }}
        style={{ width: 120, height: 120}}   
      />
      <Text style={styles.text}>This is a Text component</Text>
      <Button title="Submit" onPress={() => alert('Button Clicked!')}></Button>

      <ScrollView style={{ marginTop: 20}} horizontal>
        <Image
        source={{ uri: "https://news24online.com/wp-content/uploads/2025/03/Image-Source-ANI-2025-03-31T084303.158.jpg" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://a.storyblok.com/f/178900/960x540/6e6bcda041/demon-slayer.jpg/m/filters:quality(95)format(webp)" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://static.beebom.com/wp-content/uploads/2024/05/Giyu.jpg?w=1024&quality=75" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGISJvDRKDEtKlIMVQcq81wsejAuQlE0y9SA&s" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://static.beebom.com/wp-content/uploads/2024/05/Mitsuri.jpg?w=1024&quality=75" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/Demon-Slayer-Tengen-Uzui.jpg?w=1024" }}
        style={{ width: 120, height: 120}}   
      />

      <Image
        source={{ uri: "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/9/9d/Sanemi%27s_introduction_%28anime%29.png/revision/latest?cb=20190831165910" }}
        style={{ width: 120, height: 120}}   
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF2EB',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },

  text: {
    fontSize: 16,
    color: '#F564A9',
    marginBottom: 10
  }

})