import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Welcome from '../pages/Welcome';
import Weather from '../pages/Weather';
import WeatherSearch from '../pages/WeatherSearch';


import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherSearch" component={WeatherSearch} options={{ headerShown: false}} />
        </Stack.Navigator>

    );
};