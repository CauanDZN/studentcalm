import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import img from '../../../assets/icon.png'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={{ width: 150, height: 150 }} />
        <Text style={styles.text}>Bem-vindo(a) ao Student Calm!</Text>
        <Text style={styles.text}>Nossa rede de apoio psicológico para alunos.</Text>
      </View>
      <View>
        <Text style={styles.text}>Agende uma consulta com um de nossos psicólogos.</Text>
        <Text style={styles.text}>Para isso, basta acessar a aba "Psicólogos".</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff'
  }
});
