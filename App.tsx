import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import icon from './assets/insta1.png'
import icons from './assets/meta.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={icon}
        style={styles.logo}
      />

      <Text style={styles.meta}>from</Text>
      
      <Image 
        source={icons}
        style={styles.logos}
      />
    </View>
  );
};
export default App;
