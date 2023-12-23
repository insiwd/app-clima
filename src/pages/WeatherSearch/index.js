// WeatherSearch.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'

export default function WeatherSearch() {
  const [location, setLocation] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { updateLocation } = route.params;

  const handleSearch = () => {

    if (!location.trim()) {
      alert('Digite uma cidade.');
    }
    else {
      updateLocation(location);
      navigation.goBack();
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a cidade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: São Paulo"
        onChangeText={(text) => setLocation(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d4c4c'
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10
  },

  searchButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
