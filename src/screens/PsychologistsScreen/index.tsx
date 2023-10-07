import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const psychologistsData = [
  { id: '1', name: 'Psicólogo 1', specialization: 'Especialização 1', image: require('../../images/psicologo.png') },
  { id: '2', name: 'Psicólogo 2', specialization: 'Especialização 2', image: require('../../images/psicologo.png') },
  { id: '3', name: 'Psicólogo 3', specialization: 'Especialização 3', image: require('../../images/psicologo.png') },
  // Adicione mais psicólogos aqui
];

export default function PsychologistsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Navegue para a tela de detalhes do psicólogo
        navigation.navigate('PsychologistDetails', { psychologist: item });
      }}
    >
      <View style={styles.psychologistContainer}>
        <Image source={item.image} style={styles.psychologistImage} />
        <View style={styles.psychologistInfo}>
          <Text style={styles.psychologistName}>{item.name}</Text>
          <Text style={styles.psychologistSpecialization}>{item.specialization}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={psychologistsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  psychologistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  psychologistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  psychologistInfo: {
    flex: 1,
  },
  psychologistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  psychologistSpecialization: {
    fontSize: 14,
    color: '#777',
  },
});
