import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles2';
import logo from './assets/insta2.png'
import logo2 from './assets/meta1.png';


export default function LoginScreen() {
  return (
    <View style={styles.container}>

      <Image 
        source={logo}
        style={styles.logo}
      />


      <TextInput
        placeholder="Username, email or mobile number"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Find your account</Text>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Create new account</Text>
      </TouchableOpacity>

      <Image 
        source={logo2}
        style={styles.logo2}
      />

    </View>
  );
}
