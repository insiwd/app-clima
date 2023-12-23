// App.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



export default function App() {
  const [currentHour, setCurrentHour] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [location, setLocation] = useState('');
  const apiKey = ''
  const navigation = useNavigation();

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const temperature = response.data.main.temp;
      setCurrentTemperature(temperature.toFixed(1));

      // obtendo hora atual

      const currentDateTime = new Date();
      const hours = currentDateTime.getHours();
      const minutes = currentDateTime.getMinutes();
      const formattedHour = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentHour(formattedHour);
    }
    catch (error) {
      console.error('Erro!', error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherData();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    console.log('Botão REFRESH apertado');
    fetchWeatherData();
  };

  const handleSearch = () => {
    // Lógica para abrir a aba de pesquisa
    console.log('Botão SEARCH apertado');
    navigation.navigate('WeatherSearch', { updateLocation: setLocation });
  };
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <EvilIcons name="refresh" size={35} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <AntDesign name="search1" size={20} color="white" />
      </TouchableOpacity>

      <Image
        source={require('../../assets/sun.png')}
        style={styles.sunIcon}
      />

      <View style={styles.temperature}>
        <View style={styles.temperatureContainer}>

          <Text style={styles.temperatureText}>{currentTemperature}</Text>
          <Text style={[styles.celsiusText]}>ºC</Text>

        </View>
      </View>

      <View style={styles.locationAndHour}>
        <Text style={styles.location}>{location}, </Text>
        <Text style={styles.currentHour}>{currentHour}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4d4c4c'
  },

  sunIcon: {
    width: 200,
    height: 200,
    marginTop: 50,
  },

  temperature: {
    alignItems: 'center',
    marginTop: 360,
    position: 'absolute'
  },

  temperatureContainer: {
    marginTop: -10, // Ajuste esse valor conforme necessário
    flexDirection: 'row',
  },

  celsiusText: {
    fontSize: 18,
    fontWeight: 500,
    top: 20,
    right: -15,
    position: 'absolute'
  },

  temperatureText: {
    fontSize: 70,
    fontWeight: 'bold'
  },

  locationAndHour: {
    flexDirection: 'row',
    marginTop: 90
  },

  location: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  currentHour: {
    fontSize: 20,
    fontWeight: 'bold'
  },


  refreshButton: {
    position: 'absolute',
    top: 50,
    left: 11,
    right: '90%',
    alignSelf: 'flex-start',

  },

  searchButton: {
    position: 'absolute',
    top: 50,
    left: '90%',
    right: 0,
  },
});
